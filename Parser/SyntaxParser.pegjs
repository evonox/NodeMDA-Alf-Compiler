{
    var alf = require("../Alf/Alf");
}


/*
    UnitDefinition
*/
UnitDefinition = namespaceName:NamespaceDeclaration?
                importDec:(ImportDeclaration)*
                documentation:documentComment?
                annotation:(StereotypeAnnotation)*
                definition:NamespaceDefinition
{
    let obj = new alf.UnitDefinition();
    obj.namespaceName = namespaceName;
    obj.import = importDec;
    obj.definition = definition;
    obj.documentation = documentation;
    obj.definition.annotation = annotation;
    return obj;
}

NamespaceDeclaration = kwNamespace q:QualifiedName pSemiColon { return q; }

ImportDeclaration = visibility:ImportVisibilityIndicator kwImport i:ImportReference pSemiColon {
    i.visibility = visibility;
    return i;
}

ImportVisibilityIndicator = kwPublic / kwPrivate

ImportReference = ElementImportReference / PackageImportReference

ElementImportReference = referentName:QualifiedName alias:AliasDefinition? {
    let obj = new alf.ElementImportReference();
    obj.referentName = referentName;
    obj.alias = alias;
    return obj;
}

AliasDefinition = kwAs n:name { return n; }

PackageImportReference = referentName:(
    rn:ColonQualifiedName pDoubleColon opMult { return rn; }
    / rn:DotQualifiedName pDot opMult { return rn; }
    / rn:UnqualifiedName pDoubleColon opMult { return rn; }
    / rn:UnqualifiedName pDot opMult { return rn; }
) {
    let obj = new alf.PackageImportReference();
    obj.referentName = referentName;
    return referentName;
}

StereotypeAnnotation = opAt stereotypeName:QualifiedName s:( pLParen s:TaggedValues pRParen { return s; }  )? {
    if(s === null) s = new alf.StereotypeAnnotation();
    s.stereotypeName = stereotypeName;
    return s;
}

TaggedValues = names:QualifiedNameList {
    let s = new alf.StereotypeAnnotation();
    s.names = names;
    return s;
}
/ taggedValues:TaggedValueList {
    let s = new alf.StereotypeAnnotation();
    s.taggedValues = taggedValues;
    return s;
}

TaggedValueList = first:TaggedValue other:( pComma t:TaggedValue { return t;} )* {
    let obj = new alf.TaggedValueList();
    obj.taggedValue = [first].concat(other);
    return obj;
}

TaggedValue = name:name pFatArrow t:LiteralValue {
    t.name = name;
    return t;
}

LiteralValue = value:booleanLiteral {
    let obj = new alf.TaggedValue();
    obj.value = value;
    return value;
}
/ operator:NumericUnaryOperator? value:naturalLiteral {
    let obj = new alf.TaggedValue();
    obj.value = value;
    obj.operator = operator;
    return value;
}
/ value:unboundedNaturalLiteral {
    let obj = new alf.TaggedValue();
    obj.value = value;
    return value;
}
/ value:stringLiteral {
    let obj = new alf.TaggedValue();
    obj.value = value;
    return value;
}

// NamespaceDefinition
NamespaceDefinition = PackageDefinition / ClassifierDefinition

VisibilityIndicator = ImportVisibilityIndicator / kwProtected

// PackageDeclaration
PackageDeclaration = kwPackage name:name {
    let obj = new alf.PackageDefinition();
    obj.name = name;
    return name;
}

PackageDefinition = d:PackageDeclaration pLBrace ownedMember:(PackagedElement)* pRBrace {
    d.ownedMember = ownedMember;
    return d;
}

PackagedElement = documentation:documentComment? annotation:StereotypeAnnotation*
                visibility:ImportVisibilityIndicator m:PackagedElementDefinition 
{
    m.visibility = visibility;
    m.annotation = annotation;
    m.documentation = documentation;
    return m;
}

PackagedElementDefinition = NamespaceDefinition / NamespaceStubDeclaration

NamespaceStubDeclaration = PackageStubDeclaration / ClassifierStubDeclaration

PackageStubDeclaration = m:PackageDeclaration pSemiColon {
    m.isStub = true;
    return m;
}

// ClassifierDefinition
ClassifierDefinition = ClassDefinition
                    / ActiveClassDefinition
                    / DataTypeDefinition
                    / EnumerationDefinition
                    / AssociationDefinition
                    / SignalDefinition
                    / ActivityDefinition

ClassifierDeclaration = ClassDeclaration
                    / ActiveClassDeclaration
                    / DataTypeDeclaration
                    / EnumerationDeclaration
                    / AssociationDeclaration
                    / SignalDeclaration
                    / ActivityDeclaration

ClassifierStubDeclaration = d:ClassifierDeclaration pSemiColon { d.isStub = true; return d; }

ClassifierSignature = type:(kwClass / (a:kwActive kwClass { return a })/ kwDataType / kwAssoc / kwSignal) 
                        name:name d:TemplateParameters? specialization:SpecializationClause? {
    let obj = null;
    switch(type) {
        case "class": obj = new alf.ClassDefinition() break;
        case "active": obj = new alf.ActiveClassDefinition(); break;
        case "datatype": obj = new alf.DataTypeDefinition(); break;
        case "assoc": obj = new alf.AssociationDefinition(); break;
        case "signal": obj = new alf.SignalDefinition(); break; 
    }
    if(d !== null){
        obj.ownedMember = d.ownedMember;
    }
    obj.name = name;
    obj.specialization = specialization;
}

TemplateParameters = opLess first:ClassifierTemplateParameter other:(pComma p:ClassifierTemplateParameter { return p; })* opGreater
{
    let obj = new alf.ClassifierDefinition();
    obj.ownedMember = [first].concat(other);
    return obj;
}

ClassifierTemplateParameter = documentation:documentComment? name:name
                            specialization:TemplateParameterConstraint? 
{
    let obj = new alf.ClassifierTemplateParameter();
    obj.documentation = documentation;
    obj.name = name;
    obj.specialization = specialization;
    obj.visibility = "private";
    obj.isAbstract = true;
    return obj;
}

TemplateParameterConstraint = kwSpecializes name:QualifiedName { 
    let qList = new alf.QualifiedNameList();
    qList.name = [name];
    return qList; 
}

SpecializationClause = kwSpecializes qList:QualifiedNameList { return qList; }

// ClassDeclaration
ClassDeclaration = abstract:kwAbstract? d:ClassifierSignature {
    if(abstract !== null) d.isAbstract = true;
    return d;
}

ClassDefinition = d:ClassDeclaration pLBrace ownedMember:(ClassMember)* pRBrace {
    d.ownedMember = ownedMember;
    return d;
}

ClassMember = documentation:documentComment?
            annotation:(StereotypeAnnotation)*
            visibility:VisibilityIndicator?
            m:ClassMemberDefinition
{
    m.visibility = visibility;
    m.annotation = annotation;
    m.documentation = documentation;
    return m;
}

ClassMemberDefinition = ClassifierDefinition
                    / ClassifierStubDeclaration
                    / FeatureDefinition
                    / FeatureStubDeclaration

// ActiveClassDeclaration
ActiveClassDeclaration = abstract:kwAbstract? d:ClassifierSignature {
    if(abstract !== null) d.isAbstract = true;
    return d;
}

ActiveClassDefinition = d:ActiveClassDeclaration pLBrace ownedMember:(ActiveClassMember)* pRBrace
                    classifierBehavior:( kwDo classifierBehavior:BehaviorClause { return classifierBehavior; })?
{
    d.ownedMember = ownedMember;
    d.classifierBehavior = classifierBehavior;
    if(classifierBehavior !== null) {
        d.classifierBehavior.visibility = "private";
        d.ownedMember.push(classifierBehavior);
    }
    return d;
}        

BehaviorClause = body:Block {
    let obj = new alf.ActivityDefinition();
    obj.body = body;
    return obj;
}
/ name:name {
    let obj = new alf.ActivityDefinition();
    obj.name = name;
    obj.isStub = true;
    return obj;
}

ActiveClassMember = documentation:documentComment?
            annotation:(StereotypeAnnotation)*
            visibility:VisibilityIndicator?
            m:ActiveClassMemberDefinition
{
    m.visibility = visibility;
    m.annotation = annotation;
    m.documentation = documentation;
    return m;
}

ActiveClassMemberDefinition = ClassMemberDefinition
                            / ActiveFeatureDefinition
                            / ActiveFeatureStubDeclaration

// DataTypeDeclaration
DataTypeDeclaration = abstract:kwAbstract? d:ClassifierSignature {
    if(abstract !== null) d.isAbstract = true;
    return d;
}

DataTypeDefinition = d:DataTypeDeclaration pLBrace ownedMember:(StructuredMember)* pRBrace {
    d.ownedMember = ownedMember;
    return d;
}

StructuredMember = documentation:documentComment?
            annotation:(StereotypeAnnotation)*
            visibility:kwPublic?
            m:PropertyDefinition
{
    m.visibility = visibility;
    m.annotation = annotation;
    m.documentation = documentation;
    return m;
}

// AssociationDeclaration
AssociationDeclaration = abstract:kwAbstract? d:ClassifierSignature {
    if(abstract !== null) d.isAbstract = true;
    return d;
}

AssociationDefinition =  d:AssociationDeclaration pLBrace
                        first:StructuredMember second:StructuredMember
                        other:(StructuredMember)* pRBrace {
    d.ownedMember = [first, second].concat(other);
    return d;
}

// EnumerationDeclaration
EnumerationDeclaration = kwEnum name:name specialization:SpecializationClause? {
    let obj = new alf.EnumerationDefinition();
    obj.name = name;
    obj.specialization = specialization;
    return obj;
}

EnumerationDefinition = d:EnumerationDeclaration pLBrace 
                        first:EnumerationLiteralName other:(pComma n:EnumerationLiteralName { return n; } )*
                        pRBrace
{
    d.ownedElement = [first].concat(other);
    return d;
}   

EnumerationLiteralName = documentation:documentComment? name:name {
    let obj = new alf.EnumerationLiteralName();
    obj.name = name;
    obj.documentation = documentation;
    obj.visibility = "public";
    return obj;
}

// SignalDeclaration
SignalDeclaration = abstract:kwAbstract? d:ClassifierSignature {
    if(abstract !== null) d.isAbstract = true;
    return d;
}     

SignalDefinition = d:SignalDeclaration pLBrace ownedMember:(StructuredMember)* pRBrace {
    d.ownedMember = ownedMember;
    return d;
}               

// ActivityDeclaration
ActivityDeclaration = kwActivity name:name tp:TemplateParameters? d:FormalParameters retParam:ReturnParameter {
    let obj = new alf.ActivityDefinition();
    obj.name = name;
    obj.ownedMember = [];
    // TODO Check properly if this works
    obj = Object.assign(obj, tp, d);
    obj.ownedMember.push(retParam);

}

ActivityDefinition = d:ActivityDeclaration body:Block {
    d.body = body;
    return d;
}

FormalParameters = pLParen d:FormalParameterList? pRParen {
    return d === null ? new alf.NamespaceDefinition() : d;
}

FormalParameterList = first:FormalParameter other:(pColon p:FormalParameter { return p; } )* {
    let obj = new alf.NamespaceDefinition();
    obj.ownedMember = [first].concat(other);
    return obj;
}

FormalParameter = documentation:documentComment?
                annotation:StereotypeAnnotation*
                direction:ParameterDirection
                name:name pColon p:TypePart 
{
    p.documentation = documentation;
    p.annotation = annotation;
    p.direction = direction;
    p.name = name;
    return p;
}

ParameterDirection = kwIn / kwInOut / kwOut

ReturnParameter = pColon p:TypePart {
    p.direction = "return";
    return p;
}

/*
    Feature declarations
*/
FeatureDefinition = AttributeDefinition / OperationDefinition

FeatureStubDeclaration = OperationStubDeclaration

ActiveFeatureDefinition = ReceptionDefinition / SignalReceptionDefinition

ActiveFeatureStubDeclaration = SignalReceptionStubDeclaration

// PropertyDefinition
PropertyDefinition = d:PropertyDeclaration pSemiColon { return d; }

AttributeDefinition = d:PropertyDeclaration initializer:AttributeInitializer? pSemiColon {
    d.initializer = initializer;
    return d;
}

AttributeInitializer = opAssign e:InitializationExpression { return e; }

PropertyDeclaration = name:name pColon compose:kwCompose? tp:TypePart {
    let obj = new alf.PropertyDefinition();
    obj.name = name;
    obj = Object.assign(obj, tp);
    if(compose !== null) {
        obj.isComposite = true;
    }
    return obj;
}

TypePart = typeName:TypeName d:Multiplicity? {
    if(d === null) d = new alf.TypedElementDefinition();
    d.typeName = typeName;
    return d;
}

Multiplicity = d:MultiplicityRange oau:OrderingAndUniqueness? {
    if(oau !== null) {
        d = Object.assign(oau);
    }
    return d;
}

OrderingAndUniqueness = data:(
    ordered:kwOrdered nonUnique:kwNonUnique? { return [ordered, nonUnique]; }
    / nonUnique:kwNonUnique ordered:kwOrdered? { return [ordered, nonUnique]; }
    / kwSequence { return [true, true]; }
) {
    let obj = new alf.TypedElementDefinition();
    obj.isOrdered = data[0] === true;
    obj.isNonunique = data[1] === true;
    return obj;
}

MultiplicityRange = MultiplicityIndicator {
    let d = new alf.TypedElementDefinition();
    d.upperBound="*";
    return d;
}
/ pLBracket lowerBound:(lowerBound:naturalLiteral pDoubleDot { return lowerBound; })? 
            upperBound:UnlimitedNaturalLiteral pRBracket 
{
    let d = new alf.TypedElementDefinition();
    if(lowerBound !== null) d.lowerBound = lowerBound;
    d.upperBound = upperBound;
    return d;
}

UnlimitedNaturalLiteral = naturalLiteral / unboundedNaturalLiteral

// OperationDeclaration
OperationDeclaration = isAbstract:kwAbstract? name:name ownedMember:FormalParameters 
                        returnMember:ReturnParameter? redefinition:RedefinitionClause?
{
    let obj = new alf.OperationDefinition();
    obj.name = name;
    obj.ownedMember = ownedMember;
    if(isAbstract !== null) obj.isAbstract = true;
    if(returnMember !== null) obj.ownedMember.push(returnMember);
    obj.redefinition = redefinition;
    return obj;
}

OperationDefinition = d:OperationDeclaration body:Block {
    d.body = body;
    return d;
}

OperationStubDeclaration = d:OperationDeclaration pSemiColon {
    d.isStub = true;
    return d;
}

RedefinitionClause = kwRedefines qList:QualifiedNameList { return qList; }

// ReceptionDefinition
ReceptionDefinition = kwReceive signalName:QualifiedName pSemiColon {
    let obj = new alf.ReceptionDefinition();
    obj.signalName = signalName;
    obj.name = signalName.nameBinding[signalName.nameBinding.length - 1].name;
    return obj;
}

SignalReceptionDeclaration = kwReceive kwSignal name:name specialization:SpecializationClause? {
    let obj = new alf.SignalReceptionDefinition();
    obj.name = name;
    obj.specialization = specialization;
    return obj;
}

SignalReceptionDefinition = d:SignalReceptionDeclaration pLBrace ownedMember:StructuredMember* pRBrace {
    d.ownedMember = ownedMember;
    return d;
}

SignalReceptionStubDeclaration = d:SignalReceptionDeclaration pSemiColon {
    d.isStub = true;
    return d;
}

/*
    Statements
*/
Block = pLBrace b:StatementSequence pRBrace { return b; }

StatementSequence = statement:DocumentedStatement* {
    let obj = new alf.Block();
    obj.statement = statement;
    return obj;
}
 
DocumentedStatement = documentation:documentComment? s:Statement {
    s.documentation = documentation;
    return s;
}

Statement = AnnotatedStatement
        / InLineStatement
        / BlockStatement
        / EmptyStatement
        / LocalNameDeclarationStatement
        / ExpressionStatement
        / IfStatement
        / SwitchStatement
        / WhileStatement
        / DoStatement
        / ForStatement
        / BreakStatement
        / ReturnStatement
        / AcceptStatement
        / ClassifyStatement

// AnnotatedStatement
AnnotatedStatement = opDiv opDiv opAt first:Annotation other:( opAt a:Annotation { return a; }) 
                    (opDiv opDiv (InputCharacter)* )? LineTerminator 
                    s:Statement
{
    s.annotation = [first].concat(other);
    return s;
} 

Annotation = identifier:name argument:(first:name other:(pComma n:name { return n;})* {
    return [first].concat(other);
})? {
    let obj = new alf.Annotation();
    let.identifier = identifier;
    let.argument = argument === null ? [] : argument;
    return obj;
}

// InLineStatement
InLineStatement = s:InLineHeader code:CommentText opMult opDiv {
    s.code = code;
    return s;
}

InLineHeader = opDiv opMult opAt annInline pLParen language:name pRParen
                 (opDiv opDiv (InputCharacter)* )? LineTerminator 
{
    let obj = new alf.InLineStatement();
    obj.language = language;
    return obj;
}

// BlockStatement
BlockStatement = block:Block {
    let obj = new alf.BlockStatement();
    obj.block = block;
    return obj;
}

// EmptyStatement
EmptyStatement = pSemiColon {
    return new alf.EmptyStatement();
}

// LocalNameDeclarationStatement
LocalNameDeclarationStatement = s:NameDeclaration pComma expression:InitializationExpression pSemiColon {
    s.expression = expression;
    return s;
}

InitializationExpression = Expression / SequenceInitializationExpression / InstanceInitializationExpression

InstanceInitializationExpression = kwNew tuple:Tuple {
    let obj = new alf.InstanceCreationExpression();
    obj.tuple = tuple;
    return obj;
}

NameDeclaration = kwLet name:name pColon typeName:TypeName m:MultiplicityIndicator? {
    let obj = new alf.LocalNameDeclarationStatement();
    obj.name = name;
    obj.typeName = typeName;
    if(m !== null) obj.hasMultiplicity = true;
    return obj;
}
/ typeName:TypeName m:MultiplicityIndicator? name:name {
    let obj = new alf.LocalNameDeclarationStatement();
    obj.name = name;
    obj.typeName = typeName;
    if(m !== null) obj.hasMultiplicity = true;
    return obj;
}

// ExpressionStatement
ExpressionStatement = expression:Expression {
    let obj = new alf.ExpressionStatement();
    obj.expression = expression;
    return obj;
}

// IfStatement
IfStatement = kwIf s:SequentialClauses finalClause:FinalClause? {
    s.finalClause = finalClause;
    return s;
}

SequentialClauses = first:ConcurrentClauses other:( kwElse kwIf c:ConcurrentClauses { return c; })* {
    let obj = new alf.IfStatement();
    obj.nonFinalClauses = [first].concat(other);
    return obj;
}

ConcurrentClauses = first:NonFinalClause other:( kwOr kwIf c:NonFinalClause { return c; })* {
    let obj = new alf.ConcurrentClauses();
    obj.clause = [first].concat(other);
    return obj;
}

NonFinalClause = pLParen expression:Expression pRParen b:Block {
    let obj = new alf.NonFinalClause();
    obj.expression = expression;
    obj.block = b;
    return obj;
}

FinalClause = kwElse b:Block { return b; }

// SwitchStatement
SwitchStatement = kwSwitch pLParen expression:Expression pRParen 
                  pLBrace nonDefaultClause:SwitchClause*
                  defaultClause:SwitchDefaultClause? pRBrace 
{
    let obj = new alf.SwitchStatement();
    obj.expression = expression;
    obj.nonDefaultClause = nonDefaultClause;
    obj.defaultClause = defaultClause;
    return obj;
}

SwitchClause = cases:SwitchCase+ block:NonEmptyStatementSequence {
    let obj = new alf.SwitchClause();
    obj.case = cases;
    obj.block = block;
    return obj;
}

SwitchCase = kwCase e:Expression pColon { return e; }

SwitchDefaultClause = kwDefault pColon b:NonEmptyStatementSequence { return b; }

NonEmptyStatementSequence = statement:DocumentedStatement+ {
    let obj = new alf.Block();
    obj.statement = statement;
    return obj;
}

// WhileStatement
WhileStatement = kwWhile pLParen condition:Expression pRParen body:Block {
    let obj = new alf.WhileStatement();
    obj.condition = condition;
    obj.body = body;
    return obj;
}

// DoStatement
DoStatement = kwDo body:Block kwWhile pLParen condition:Expression pRParen pSemiColon {
    let obj = new alf.DoStatement();
    obj.condition = condition;
    obj.body = body;
    return obj;
}

// ForStatement
ForStatement = kwFor pLParen s:ForControl pRParen body:Block {
    s.body = body;
    return s;
}

ForControl = first:LoopVariableDefinition other:(pComma v:LoopVariableDefinition { return v; })* {
    let obj = new alf.ForStatement();
    obj.variableDefinition = [first].concat(other);
    return obj;
}

LoopVariableDefinition = variable:name kwIn expression1:Expression expression2:(pDoubleDot e:Expression)? {
    let obj = new alf.LoopVariableDefinition();
    obj.variable = variable;
    obj.expression1 = expression1;
    obj.expression2 = expression2;
    return obj;
}
/ typeName:TypeName variable:name pColon expression1:Expression {
    let obj = new alf.LoopVariableDefinition();
    obj.typeName = typeName;
    obj.variable = variable;
    obj.expression1 = expression1;
    obj.typeIsInferred = false;
    return obj;
}

// BreakStatement
BreakStatement = kwBreak pSemiColon { return new alf.BreakStatement(); }

// ReturnStatement
ReturnStatement = kwReturn expression:Expression? pSemiColon {
    let obj = new alf.ReturnStatement();
    obj.expression = expression;
    return obj;
}

// AcceptStatement
AcceptStatement = SimpleAcceptStatement / CompoundAcceptStatement

SimpleAcceptStatement = acceptBlock:AcceptBlock pSemiColon {
    let obj = new alf.AcceptStatement();
    obj.acceptBlock = [acceptBlock];
    return obj;
}

CompoundAcceptStatement = first:AcceptBlock other:( kwOr a:AcceptBlock { return a;} )* {
    let obj = new alf.AcceptStatement();
    obj.acceptBlock = first.concat(other);
    return obj;
}

AcceptBlock = a:AcceptClause block:Block {
    a.block = block;
    return a;
}

AcceptClause = kwAccept pLParen name:( n:name pColon { return n; })? signalNames:QualifiedNameList pRParen {
    let obj = new alf.AcceptBlock();
    obj.name = name;
    obj.signalNames = signalNames;
    return obj;
}

QualifiedNameList = first:QualifiedName other:( pComma qn:QualifiedName )* {
    let obj = new alf.QualifiedNameList();
    obj.name = [first].concat(other);
    return obj;
} 

// ClassifyStatement
ClassifyStatement = kwClassify expression:Expression s:ClassificationClause pSemiColon {
    s.expression = expression;
    return s;
}

ClassificationClause = fromList:ClassificationFromClause toList:ClassificationToClause? {
    let obj = new alf.ClassifyStatement();
    obj.fromList = fromList;
    obj.toList = toList;
    return obj;
}
/ all:ReclassifyAllClause? toList:ClassificationToClause {
    let obj = new alf.ClassifyStatement();
    obj.toList = toList;
    if(all !== null) obj.isReclassifyAll = true;
    return obj;
}

ClassificationFromClause = kwFrom qList:QualifiedNameList {
    return qList;
}

ClassificationToClause = kwTo qList:QualifiedNameList {
    return qList;
}

ReclassifyAllClause = kwFrom opMult {
    return new alf.QualifiedNameList();
}


Expression = ConditionalExpression / AssignmentExpression

/*
    Assignment expressions
*/
AssignmentExpression = leftHandSide:LeftHandSide operator:AssignmentOperator rightHandSide:Expression {
    let obj = new alf.AssignmentExpression();
    obj.leftHandSide = leftHandSide;
    obj.operator = operator;
    obj.rightHandSide = rightHandSide;
}

LeftHandSide = lhs:NameLeftHandSide index:( index:Index { return index; })? {
    lhs.index = index;
    return lhs;
}
/ lhs:FeatureLeftHandSide index:( index:Index { return index; })? {
    lhs.index = index;
    return lhs;
}
/ pLParen lhs:LeftHandSide pRParen { return lhs; }

NameLeftHandSide = target:PotentiallyAmbiguousQualifiedName {
    let obj = new alf.NameLeftHandSide();
    obj.target = target;
    return target;
}

FeatureLeftHandSide = feature:FeatureReference {
    let obj = new alf.FeatureLeftHandSide();
    obj.feature = feature;
    return obj;
}

AssignmentOperator = opAssign / opAsgnMod / opAsgnBitXor / opAsgnBitOr
                    / opAsgnBitAnd / opAsgnDiv / opAsgnMult / opAsgnSub
                    / opAsgnAdd / opAsgnZeroShiftRight / opAsgnRightShift / opAsgnLeftShift

/*
    Conditional-Test expressions
*/
ConditionalExpression = ConditionalAndOrConditionalOrExpression / ConditionalTestExpression
ConditionalTestExpression = operand1:ConditionalAndOrConditionalOrExpression opQuestionMark
                            operand2:Expression pColon
                            operand3:ConditionalExpression
{
    let obj = new alf.ConditionalTestExpression();
    obj.operand1 = operand1;
    obj.operand2 = operand2;
    obj.operand3 = operand3;
    return obj;
}

/*
    Binary operator expressions
*/
InclusiveOrOrConditionalAndExpression = ExclusiveOrOrInclusiveOrExpression / ConditionalAndExpression
ConditionalAndExpression = operand1:InclusiveOrOrConditionalAndExpression operator:opLogAnd operand2:ExclusiveOrOrInclusiveOrExpression {
    let obj = new alf.ConditionalLogicalExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}

ConditionalAndOrConditionalOrExpression = InclusiveOrOrConditionalAndExpression / ConditionalOrExpression
ConditionalOrExpression = operand1:ConditionalAndOrConditionalOrExpression operator:opLogOr operand2:InclusiveOrOrConditionalAndExpression {
    let obj = new alf.ConditionalLogicalExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}

EqualityOrAndExpression = ClassificationOrEqualityExpression / AndExpression
AndExpression = operand1:EqualityOrAndExpression operator:opBitLogAnd operand2:ClassificationOrEqualityExpression {
    let obj = new alf.LogicalExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}

AndOrExclusiveOrExpression = EqualityOrAndExpression / ExclusiveOrExpression
ExclusiveOrExpression = operand1:AndOrExclusiveOrExpression operator:opBitLogXor operand2:EqualityOrAndExpression {
    let obj = new alf.LogicalExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}

ExclusiveOrOrInclusiveOrExpression = AndOrExclusiveOrExpression / InclusiveOrExpression
InclusiveOrExpression = operand1:ExclusiveOrOrInclusiveOrExpression operator:opBitLogOr operand2:AndOrExclusiveOrExpression {
    let obj = new alf.LogicalExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}

ClassificationOrEqualityExpression = RelationalOrClassificationExpression / EqualityExpression
EqualityExpression = operand1:ClassificationOrEqualityExpression operator:EqualityOperator operand2:RelationalOrClassificationExpression {
    let obj = new alf.EqualityExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}
EqualityOperator = opEqual / opNotEqual
EqualityOrAndExpression = ClassificationOrEqualityExpression / AndExpression

RelationalOrClassificationExpression = ShiftOrRelationalExpression / ClassificationExpression
ClassificationExpression = operand:ShiftOrRelationalExpression operator:ClassificationOperator typeName:QualifiedName {
    let obj = new alf.ClassificationExpression();
    obj.operand = operand;
    obj.operator = operator;
    obj.typeName = typeName;
    return obj;
}
ClassificationOperator = kwInstanceOf / kwHasType

ShiftOrRelationalExpression = ArithmeticOrShiftExpression / RelationalExpression
RelationalExpression = operand1:ArithmeticOrShiftExpression operator:RelationalOperator operand2:ArithmeticOrShiftExpression {
    let obj = new alf.RelationalExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}
RelationalOperator = opLessOrEqual / opGreaterOrEqual / opGreater / opLess

ArithmeticOrShiftExpression = UnaryOrArithmeticExpression / ShiftExpression
ShiftExpression = operand1:ArithmeticOrShiftExpression operator:ShiftOperator operand2:UnaryOrArithmeticExpression {
    let obj = new alf.ShiftExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}
ShiftOperator = opLeftShift / opRightShift / opZeroShiftRight

UnaryOrArithmeticExpression = UnaryOrMultiplicativeExpression / AdditiveExpression
AdditiveExpression = operand1:UnaryOrMultiplicativeExpression operator:AdditiveOperator operand2:UnaryOrMultiplicativeExpression {
    let obj = new alf.ArithmeticExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}
AdditiveOperator = opAdd / opSub

UnaryOrMultiplicativeExpression = UnaryExpression / MultiplicativeExpression
MultiplicativeExpression = operand1:UnaryOrMultiplicativeExpression operator:MultiplicativeOperator operand2:UnaryExpression {
    let obj = new alf.ArithmeticExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}
MultiplicativeOperator = opMult / opDiv / opMod

/*
    Unary operator expressions
*/
UnaryExpression = PrimaryExpression
            / IncrementOrDecrementExpression
            / BooleanUnaryExpression
            / BitStringUnaryExpression
            / NumericUnaryExpression
            / CastExpression
            / IsolationExpression


IsolationExpression = operator:opDollar operand:UnaryExpression {
    let obj = new alf.IsolationExpression();
    obj.operator = operator;
    obj.operand = operand;
    return obj;
}

CastExpression = pLParen typeName:TypeName pRParen operand:NonNumericUnaryExpression {
    let obj = new alf.CastExpression();
    obj.typeName = typeName;
    obj.operand = operand;
    return obj;
}

NonNumericUnaryExpression = PrimaryExpression
            / PostfixExpression
            / BooleanUnaryExpression
            / BitStringUnaryExpression
            / CastExpression
            / IsolationExpression

NumericUnaryExpression = operator:NumericUnaryOperator operand:UnaryExpression {
    let obj = new alf.NumericUnaryExpression();
    obj.operator = operator;
    obj.operand = operand;
    return obj;
}

NumericUnaryOperator = opAdd / opSub

BitStringUnaryExpression = operator:opBitNot operand:UnaryExpression {
    let obj = new alf.BitStringUnaryExpression();
    obj.operator = operator;
    obj.operand = operand;
    return obj;
}

BooleanUnaryExpression = operator:opLogNot operand:UnaryExpression {
    let obj = new alf.BooleanUnaryExpression();
    obj.operator = operator;
    obj.operand = operand;
    return obj;
}

/*
    Increment and decrement operators
*/

IncrementOrDecrementExpression = e:PostfixExpression { e.isPrefix = false; }
                    / e:PrefixExpression { e.isPrefix = true; }

PostfixExpression = operand:LeftHandSide operator:AffixOperator {
    let obj = new alf.IncrementOrDecrementExpression();
    obj.operator = operator;
    obj.operand = operand;
    return obj;
}

PrefixExpression = operator:AffixOperator operand:LeftHandSide {
    let obj = new alf.IncrementOrDecrementExpression();
    obj.operator = operator;
    obj.operand = operand;
    return obj;
}

AffixOperator = opIncrement / opDecrement


/*
    Primary expressions
*/
PrimaryExpression = NameExpression / NonNamePrimaryExpression
NonNamePrimaryExpression = LiteralExpression / ThisExpression / ParenthesizedExpression // / PropertyAccessExpression
        / InvocationExpression / InstanceCreationExpression / LinkOperationExpression / ClassExtentExpression
  /*      / SequenceConstructionExpression / SequenceAccessExpression / SequenceOperationExpression 
        / SequenceReductionExpression / SequenceExpansionExpression */

// Literal expressions
LiteralExpression = BooleanLiteralExpression 
                    / NaturalLiteralExpression
                    / UnboundedLiteralExpression
                    / StringLiteralExpression
BooleanLiteralExpression = image:booleanLiteral {
    let obj = new alf.BooleanLiteralExpression)();
    obj.image = image;
    return obj;
}
NaturalLiteralExpression = image:naturalLiteral {
    let obj = new alf.NaturalLiteralExpression)();
    obj.image = image;
    return obj;
}
UnboundedLiteralExpression = unboundedNaturalLiteral {
    return new alf.UnboundedLiteralExpression();
}
StringLiteralExpression = image:stringLiteral {
    let obj = new alf.StringLiteralExpression)();
    obj.image = image;
    return obj;
}

// Name expression
NameExpression = name:PotentiallyAmbiguousQualifiedName {
    let obj = new alf.NameExpression();
    obj.name = name;
    return obj;
}

// ThisExpression
ThisExpression = kwThis {
    return new alf.ThisExpression();
}

// ParenthesizedExpression
ParenthesizedExpression = pLParen e:Expression pRParen { return e; }

// PropertyAccessExpression - STUDY DISAMBIGUATION RULES
/*PropertyAccessExpression = featureReference:FeatureReference {
    let obj = new alf.PropertyAccessExpression();
    obj.featureReference = featureReference;
    return obj;
}*/
FeatureReference = expression:FeatureTargetExpression pDot nameBinding:NameBinding {
    let obj = new alf.FeatureReference();
    obj.expression = expression;
    obj.nameBinding = nameBinding;
    return obj;
}
FeatureTargetExpression = NameTargetExpression / NonNamePrimaryExpression
NameTargetExpression = name:ColonQualifiedName {
    let obj = new alf.NameExpression();
    obj.name = name;
    return obj;
}

// InvocationExpression
InvocationExpression = e:InvocationTarget tuple:Tuple { e.tuple = tuple; return e; }
InvocationTarget = BehaviorInvocationTarget / /* FeatureInvocationTarget /*/  SuperInvocationTarget;

// Tuple
Tuple = PositionalTuple / NamedTuple

PositionalTuple = pLParen tuple:TupleExpressionList? pRParen {
    return tuple === null ? new alf.PositionalTuple)() : tuple;
}
TupleExpressionList = first:Expression other:( pComma e:Expression { return e; } )* {
    let obj = new alf.PositionalTuple();
    obj.expression = [first].concat(other);
    return obj;
}

NamedTuple = pLParen first:NamedExpression other:( pComma ne:NamedExpression { return ne; } )* pRParen {
    let obj = new alf.NamedTuple();
    obj.namedExpression = [first].concat(other);
    return obj;
}
NamedExpression = name:name pFatArrow expression:Expression {
    let obj = new alf.NamedExpression();
    obj.name = name;
    obj.expression = expression;
    return obj;
}

// BehaviorInvocationTarget
BehaviorInvocationTarget = target:PotentiallyAmbiguousQualifiedName {
    let obj = new alf.BehaviorInvocationExpression();
    obj.target = target;
    return obj;
}

// FeatureInvocationTarget
FeatureInvocationTarget = target:FeatureReference {
    let obj = new alf.FeatureInvocationExpression();
    obj.target = target;
    return obj;
}
/ kwThis

// SuperInvocationTarget
SuperInvocationTarget = kwSuper target:( pDot target:QualifiedName { return target; })? {
    let obj = new alf.SuperInvocationExpression();
    obj.target = target;
    return obj;
}

// InstanceCreationExpression
InstanceCreationExpression = kwNew constructorName:QualifiedName tuple:Tuple {
    let obj = new alf.InstanceCreationExpression();
    obj.constructor = constructorName;
    obj.tuple = tuple;
    return obj;
}

// LinkOperationExpression
LinkOperationExpression = associationName:QualifiedName pDot operation:LinkOperation tuple:LinkOperationTuple {
    let obj = new alf.LinkOperationExpression();
    obj.associationName = associationName;
    obj.operation = operation;
    obj.tuple = tuple;
    return obj;
}

LinkOperation = kwCreateLink / kwDestroyLink / kwClearAssoc

LinkOperationTuple = PositionalTuple / IndexedNamedTuple

IndexedNamedTuple = pLParen first:IndexedNamedExpression other:( pComma int:IndexedNamedTuple { return int; })* pRParen
{
    let obj = new alf.NamedTuple();
    obj.expressions = [first].concat(other);
    return obj;
}

IndexedNamedExpression = name:name ( index: Index { return index; })? pFatArrow expression:Expression {
    let obj = new alf.NamedExpression();
    obj.name = name;
    obj.index = index;
    obj.expression = expression;
}

Index = pLBracket e:Expression pRBracket { return e; }

// ClassExtentExpression
ClassExtentExpression = type:QualifiedName pDot kwAllInstances pLParen pRParen {
    let obj = new alf.ClassExtentExpression();
    obj.type = type;
    return obj;
}

// SequenceConstructionExpression
SequenceConstructionExpression = NullExpression {
    let obj = new alf.SequenceConstructionExpression();
    obj.hasMultiplicity = true;
    return obj;
} / SequenceElementsExpression

NullExpression = kwNull

SequenceElementsExpression = ( kwNew )? e:SequenceElementsTypePart pLBrace elements:SequenceElements pRBrace {
    e.elements = elements;
    return e;
}

SequenceElementsTypePart = typeName:TypeName multIndication:( MultiplicityIndicator )? {
    let obj = new alf.SequenceConstructionExpression();
    obj.typeName = typeName;
    if(multIndication !== null) obj.hasMultiplicity = true;
    return obj;
}

MultiplicityIndicator = pLBracket pRBracket

SequenceInitializationExpression = ( kwNew )? pLBrace elements:SequenceElements pRBrace {
    let obj = new alf.SequenceConstructionExpression();
    obj.elements = elements;
    return obj;
}

SequenceElements = SequenceElementList / SequenceRange

SequenceElementList = element:( 
    first:SequenceElement other:(pComma se: SequenceElement { return se; } )* pComma?  
    { return [first].concat(other); }
)? {
    let obj = new alf.SSequenceExpressionList();
    obj.element = element;
    return obj;
}

SequenceElement = Expression / SequenceInitializationExpression

SequenceRange = rangeLower:Expression pDoubleDot rangeUpper:Expression {
    let obj = new alf.SequenceRange();
    obj.rangeLower = rangeLower;
    obj.rangeUpper = rangeUpper;
    return obj;
}

// SequenceAccessExpression
SequenceAccessExpression = primary:PrimaryExpression index:Index {
    let obj = new alf.SequenceAccessExpression();
    obj.primary = primary;
    obj.index = index;
    return obj;
}

// SequenceOperationExpression
SequenceOperationExpression = primary:ExtentOrExpression pSlimArrow operation:QualifiedName tuple:Tuple {
    let obj = new alf.SequenceOperationExpression();
    obj.primary = primary;
    obj.operation = operation;
    obj.tuple = tuple;
    return obj;
}

ExtentOrExpression = name:QualifiedName {
    let obj = new alf.ExtentOrExpression();
    obj.name = name;
    return obj;
}
/ nonNameExpression:NonNamePrimaryExpression {
    let obj = new alf.ExtentOrExpression();
    obj.nonNameExpression = nonNameExpression;
    return obj;
}

// SequenceReductionExpression
SequenceReductionExpression = primary:ExtentOrExpression pSlimArrow kwReduce ordered:( kwOrdered )? behavior:QualifiedName
{
    let obj = new alf.ReductionExpression();
    obj.primary = primary;
    if(ordered !== null) obj.isOrdered = true;
    obj.behavior = behavior;
    return obj;
}

// SequenceExpansionExpression
SequenceExpansionExpression = primary:ExtentOrExpression pSlimArrow e:ExpansionOperation
                    variable:name pLParen argument:Expression pLParen 
{
    e.primary = primary;
    e.variable = variable;
    e.argument = argument;
    return e;    
}

ExpansionOperation = SelectOrRejectOperation
                    / CollectOrIterateOperation
                    / ForAllOrExistsOrOneOperation
                    / IsUniqueOperation

SelectOrRejectOperation = operation:(fnSelect / fnReject) {
    let obj = new alf.SelectOrRejectExpression();
    obj.operation = operation;
    return obj;
}

CollectOrIterateOperation = operation:(fnCollect / fnIterate) {
    let obj = new alf.CollectOrIterateExpression();
    obj.operation = operation;
    return obj;
}

ForAllOrExistsOrOneOperation = operation:(fnForAll / fnExists / fnOne) {
    let obj = new alf.ForAllOrExistsOrOneExpression();
    obj.operation = operation;
    return obj;
}

IsUniqueOperation = operation:fnIsUnique {
    let obj = new alf.IsUniqueExpression();
    obj.operation = operation;
    return obj;
}

/*
    Qualified names
*/
TypeName = QualifiedName / kwAny

QualifiedName = qn:(ColonQualifiedName / DotQualifiedName / UnqualifiedName) 
{ qn.isAmbiguous = false; return qn; }

PotentiallyAmbiguousQualifiedName = qn:ColonQualifiedName { qn.isAmbiguous = false; return qn; }
        / qn:DotQualifiedName { qn.isAmbiguous = true; return qn; }
        / qn:UnqualifiedName { qn.isAmbiguous = false; return qn; }

ColonQualifiedName = first:NameBinding other:(pDoubleColon nb:NameBinding { return nb; } )+ {
    let obj = new alf.QualifiedName();
    obj.nameBinding = [first].concat(other);
    return obj;
}

DotQualifiedName = first:NameBinding other:(pDot nb:NameBinding { return nb; } )+ {
    let obj = new alf.QualifiedName();
    obj.nameBinding = [first].concat(other);
    return obj;
}

UnqualifiedName = nameBinding:NameBinding {
    let obj = new alf.QualifiedName();
    obj.nameBinding = [nameBinding];
    return obj;
}

NameBinding = name:name binding:(TemplateBinding)? {
    let obj = new alf.NameBinding();
    obj.name = name;
    obj.binding = binding;
    return obj;
}

TemplateBinding = PositionalTemplateBinding / NamedTemplateBinding

PositionalTemplateBinding = opLess first:QualifiedName other:( pComma qn:QualifiedName { return qn; } )* opGreater {
    let obj = new alf.PositionalTemplateBinding();
    obj.argumentName = new Array();
    obj.argumentName.push(first);
    obj.argumentName.push(...other);
    return obj;
}

NamedTemplateBinding = opLess first:TemplateParameterSubstitution other:( pComma tps:TemplateParameterSubstitution { return tps; } )* opGreater {
    let obj = new alf.NamedTemplateBinding();
    obj.substitution = new Array();
    obj.substitution.push(first);
    obj.substitution.push(...other);
    return obj;
}

TemplateParameterSubstitution = parameterName:name pFatArrow argumentName:QualifiedName {
    let obj = new alf.TemplateParameterSubstitution();
    obj.parameterName = parameterName;
    obj.argumentName = argumentName;
    return obj;
}

 
 
/*
    Punctuation
*/
pDoubleDot = punPrefix ".." tokenSuffix
pDoubleColon = punPrefix "::"  tokenSuffix
pFatArrow = punPrefix "=>"  tokenSuffix
pSlimArrow = punPrefix "->"  tokenSuffix
pLParen = punPrefix "("  tokenSuffix
pRParen = punPrefix ")"  tokenSuffix
pLBrace = punPrefix "{"  tokenSuffix
pRBrace = punPrefix "}"  tokenSuffix
pLBracket = punPrefix "["  tokenSuffix
pRBracket = punPrefix "]"  tokenSuffix
pSemiColon = punPrefix ";"  tokenSuffix
pComma = punPrefix ","  tokenSuffix
pDot = punPrefix "."  tokenSuffix
pColon = punPrefix ":"  tokenSuffix

/*
    Operators
*/
opZeroShiftRight = opPrefix ">>>" tokenSuffix
opAsgnLeftShift = opPrefix "<<=" tokenSuffix
opAsgnRightShift = opPrefix ">>=" tokenSuffix
opAsgnZeroShiftRight = opPrefix ">>>=" tokenSuffix
opLeftShift = opPrefix "<<" tokenSuffix
opRightShift = opPrefix ">>" tokenSuffix
opEqual = opPrefix "=="  tokenSuffix
opLessOrEqual = opPrefix "<="  tokenSuffix
opGreaterOrEqual = opPrefix ">="  tokenSuffix
opNotEqual = opPrefix "!="  tokenSuffix
opLogAnd = opPrefix "&&"  tokenSuffix
opLogOr = opPrefix "||"  tokenSuffix
opIncrement = opPrefix "++"  tokenSuffix
opDecrement = opPrefix "--" tokenSuffix
opAsgnAdd = opPrefix "+="  tokenSuffix
opAsgnSub = opPrefix "-="  tokenSuffix
opAsgnMult = opPrefix "*="  tokenSuffix
opAsgnDiv = opPrefix "/="  tokenSuffix
opAsgnBitAnd = opPrefix "&="  tokenSuffix
opAsgnBitOr = opPrefix "|="  tokenSuffix
opAsgnBitXor = opPrefix "^="  tokenSuffix
opAsgnMod = opPrefix "%=" tokenSuffix
opAssign = opPrefix "="  tokenSuffix
opGreater = opPrefix ">"  tokenSuffix
opLess = opPrefix "<"  tokenSuffix
opLogNot = opPrefix "!"  tokenSuffix
opBitNot = opPrefix "~"  tokenSuffix
opQuestionMark = opPrefix "?"  tokenSuffix
opAt = opPrefix "@"  tokenSuffix
opDollar = opPrefix "$" tokenSuffix
opAdd = opPrefix "+"  tokenSuffix
opSub = opPrefix "-"  tokenSuffix
opMult = opPrefix "*"  tokenSuffix
opDiv = opPrefix "/"  tokenSuffix
opBitLogAnd = opPrefix "&"  tokenSuffix
opBitLogOr = opPrefix "|"  tokenSuffix
opBitLogXor = opPrefix "^"  tokenSuffix
opMod = opPrefix "%" tokenSuffix

/*
    Keywords
*/
kwAbstract = kwPrefix "abstract" tokenSuffix
kwAccept = kwPrefix "accept"  tokenSuffix
kwActive = kwPrefix "active" tokenSuffix
kwActivity = kwPrefix "activity" tokenSuffix
kwAllInstances = kwPrefix "allInstances"  tokenSuffix
kwAny = kwPrefix "any" tokenSuffix
kwAs = kwPrefix "as"  tokenSuffix
kwAssoc = kwPrefix "assoc"  tokenSuffix
kwBreak = kwPrefix "break"  tokenSuffix
kwCase = kwPrefix "case"  tokenSuffix
kwClass = kwPrefix "class"  tokenSuffix
kwClassify = kwPrefix "classify"  tokenSuffix
kwClearAssoc = kwPrefix "clearAssoc" tokenSuffix
kwCompose = kwPrefix "compose"  tokenSuffix
kwCreateLink = kwPrefix "createLink"  tokenSuffix
kwDataType = kwPrefix "datatype"  tokenSuffix
kwDefault = kwPrefix "default"  tokenSuffix
kwDestroyLink = kwPrefix "destroyLink"  tokenSuffix
kwDo = kwPrefix "do" tokenSuffix
kwElse = kwPrefix "else" tokenSuffix
kwEnum = kwPrefix "enum"  tokenSuffix
kwFor = kwPrefix "for"  tokenSuffix
kwFrom = kwPrefix "from"  tokenSuffix
kwHasType = kwPrefix "hastype"  tokenSuffix
kwIf = kwPrefix "if"  tokenSuffix
kwImport = kwPrefix "import"  tokenSuffix
kwIn = kwPrefix "in" tokenSuffix
kwInOut = kwPrefix "inout"  tokenSuffix
kwInstanceOf = kwPrefix "instanceof"  tokenSuffix
kwLet = kwPrefix "let"  tokenSuffix
kwNamespace = kwPrefix "namespace"  tokenSuffix
kwNew = kwPrefix "new"  tokenSuffix
kwNonUnique = kwPrefix "nonunique"  tokenSuffix
kwNull = kwPrefix "null" tokenSuffix
kwOr = kwPrefix "or"  tokenSuffix
kwOrdered = kwPrefix "ordered"  tokenSuffix
kwOut = kwPrefix "out"  tokenSuffix
kwPackage = kwPrefix "package"  tokenSuffix
kwPrivate = kwPrefix "private"  tokenSuffix
kwProtected = kwPrefix "protected"  tokenSuffix
kwPublic = kwPrefix "public" tokenSuffix
kwReceive = kwPrefix "receive"  tokenSuffix
kwRedefines = kwPrefix "redefines"  tokenSuffix
kwReduce = kwPrefix "reduce"  tokenSuffix
kwReturn = kwPrefix "return"  tokenSuffix
kwSequence = kwPrefix "sequence"  tokenSuffix
kwSpecializes = kwPrefix "specializes" tokenSuffix
kwSuper = kwPrefix "super"  tokenSuffix
kwSignal = kwPrefix "signal"  tokenSuffix
kwSwitch = kwPrefix "switch"  tokenSuffix
kwThis = kwPrefix "this"  tokenSuffix
kwTo = kwPrefix "to"  tokenSuffix
kwWhile = kwPrefix "while" tokenSuffix

/*
    Function and annotation names
*/
fnIsUnique = namePrefix '"' content:"isUnique" '"' tokenSuffix { return content; }
fnForAll = namePrefix '"' content:"forAll" '"' tokenSuffix { return content; }
fnExists = namePrefix '"' content:"exists" '"' tokenSuffix { return content; }
fnOne = namePrefix '"' content:"one" '"' tokenSuffix { return content; }
fnCollect = namePrefix '"' content:"collect" '"' tokenSuffix { return content; }
fnIterate = namePrefix '"' content:"iterate" '"' tokenSuffix { return content; }
fnSelect = namePrefix '"' content:"select" '"' tokenSuffix { return content; }
fnReject = namePrefix '"' content:"reject" '"' tokenSuffix { return content; }

annInline = namePrefix '"' content:"inline" '"' tokenSuffix { return content; }


/*
    Remaining lexical elements
*/
name = namePrefix content:tokenContent tokenSuffix { return content; }
documentComment = docCommentPrefix content:tokenStringContent tokenSuffix { return content; }

booleanLiteral = booleanLiteralPrefix content:tokenContentInCommas tokenSuffix { return content; }
naturalLiteral = numberLiteralPrefix content:tokenContentInCommas tokenSuffix { return content; }
stringLiteral = stringLiteralPrefix content:tokenStringContent tokenSuffix { return content; }
unboundedNaturalLiteral = opMult

/*
    Foundational rules
*/
kwPrefix = "kw" subTokenSeparator
opPrefix = "op" subTokenSeparator
punPrefix = "p" subTokenSeparator
namePrefix = "n" subTokenSeparator

docCommentPrefix = "dc" subTokenSeparator

numberLiteralPrefix = "nlt" subTokenSeparator
booleanLiteralPrefix = "blt" subTokenSeparator
stringLiteralPrefix = "slt" subTokenSeparator

tokenStringContent = content:tokenContentInCommas {
    return content.replace(/\\n/g, "\n");
}
tokenContentInCommas = '"' content:tokenContent '"' { return content; }
tokenContent = content:tokenCharacter+ { return content.join(""); }
tokenCharacter = !(subTokenSeparator) character:. { return character; }

tokenSuffix = subTokenSeparator number subTokenSeparator number tokenSeprator

number = digit+
digit = [0-9]

subTokenSeparator = " "
tokenSeprator = "\n"

LineTerminator = "\n" / "\r"
InputCharacter = !(LineTerminator) character:(.) { return character; }

CommentText = chars:(NotStar)+ otherText:(CommentText)? {
    chars = chars.join("");
    if(otherText !== null) chars += otherText;
    chars = chars.replace(/\r/g, "");
    chars = chars.replace(/\n/g, "\\n");
    return chars;
}
StarCommentText = "*" (NotStarNotSlash CommentText )?

NotAt = ! ( "@" ) InputCharacter
NotStar = ! ( "*" ) character:InputCharacter { return character; } / LineTerminator
NotStartNotAt = ! ( "*" / "@" ) InputCharacter / LineTerminator
NotStarNotSlash = ! ("*/" ) InputCharacter / LineTerminator