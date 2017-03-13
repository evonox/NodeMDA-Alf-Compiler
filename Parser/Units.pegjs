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

