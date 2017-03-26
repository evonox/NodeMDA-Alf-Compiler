Start = UnitDefinition*

/*
    UnitDefinition
*/
UnitDefinition = namespaceName:NamespaceDeclaration?
                importDec:(! (documentComment) ImportDeclaration)*
                documentation:(documentComment)?
                annotation:StereotypeAnnotations
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

StereotypeAnnotations = StereotypeAnnotation*

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


NamespaceDeclaration = kwNamespace q:QualifiedName pSemiColon { return q; }

ImportDeclaration = visibility:ImportVisibilityIndicator kwImport i:ImportReference pSemiColon {
    i.visibility = visibility;
    return i;
}

ImportVisibilityIndicator = kwPublic / kwPrivate

ImportReference = ColonQualifiedName ( (pDoubleColon opMult)
                                        / AliasDefinition )?
                 / DotQualifiedName ( (pDot opMult) / AliasDefinition )?
                 / Name ( (( pDoubleColon / pDot ) opMult) / AliasDefinition )?

/*
ImportReference = ElementImportReference / PackageImportReference

ElementImportReference = referentName:QualifiedName alias:AliasDefinition? {
    let obj = new alf.ElementImportReference();
    obj.referentName = referentName;
    obj.alias = alias;
    return obj;
}
*/

/*
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
*/

AliasDefinition = kwAs n:name { return n; }

/* 
    NAMESPACES 
*/
NamespaceDefinition = PackageDefinition / ClassifierDefinition

VisibilityIndicator = ImportVisibilityIndicator / kwProtected

/* 
    PACKAGES 
*/

PackageDeclaration = kwPackage name:name {
    let obj = new alf.PackageDefinition();
    obj.name = name;
    return obj;
}

PackageDefinition = d:PackageDeclaration ownedMember:PackageBody {
    d.ownedMember = ownedMember;
    d.isStub = false;
    return d;
}

PackageDefinitionOrStub = d:PackageDeclaration 
                            data:( pSemiColon { return "isStub"} / ownedMember:PackageBody {  return ownedMember; } ) {
    if(data === "isStub") {
        d.isStub = true;
    } else {
        d.isStub = false;
        d.ownedMember = data;

    }
    return d;
}

PackageBody = pLBrace ownedMember:(PackagedElement)* pRBrace {
    return ownedMember;
}

PackagedElement = documentation:documentComment? annotation:StereotypeAnnotations
                visibility:ImportVisibilityIndicator m:PackagedElementDefinition 
{
    m.visibility = visibility;
    m.annotation = annotation;
    m.documentation = documentation;
    return m;
}

PackagedElementDefinition = PackageDefinitionOrStub / ClassifierDefinitionOrStub

/*
PackagedElementDefinition = NamespaceDefinition / NamespaceStubDeclaration

NamespaceStubDeclaration = PackageStubDeclaration / ClassifierStubDeclaration

PackageStubDeclaration = m:PackageDeclaration pSemiColon {
    m.isStub = true;
    return m;
}
*/


/***************
* CLASSIFIERS *
***************/

ClassifierDefinition = ClassDefinition
                    / ActiveClassDefinition
                    / DataTypeDefinition
                    / EnumerationDefinition
                    / AssociationDefinition
                    / SignalDefinition
                    / ActivityDefinition

ClassifierDefinitionOrStub = ClassDefinitionOrStub
                            / ActiveClassDefinitionOrStub
                            / DataTypeDefinitionOrStub
                            / EnumerationDefinitionOrStub
                            / AssociationDefinitionOrStub
                            / SignalDefinitionOrStub
                            / ActivityDefinitionOrStub

/*
ClassifierDeclaration = ClassDeclaration
                    / ActiveClassDeclaration
                    / DataTypeDeclaration
                    / EnumerationDeclaration
                    / AssociationDeclaration
                    / SignalDeclaration
                    / ActivityDeclaration

ClassifierStubDeclaration = d:ClassifierDeclaration pSemiColon { d.isStub = true; return d; }
*/

ClassifierSignature = Name ( TemplateParameters )? ( SpecializationClause )?

/*
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
*/

TemplateParameters = opLess first:ClassifierTemplateParameter other:(pComma p:ClassifierTemplateParameter { return p; })* opGreater
{
    let obj = new alf.ClassifierDefinition();
    obj.ownedMember = [first].concat(other);
    return obj;
}

ClassifierTemplateParameter = ( documentComment )? Name ( kwSpecializes QualifiedName )?

/*
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
*/

SpecializationClause = kwSpecializes qList:QualifiedNameList { return qList; }

/* 
    CLASSES 
*/

ClassDeclaration = abstract:kwAbstract? kwClass d:ClassifierSignature {
    if(abstract !== null) d.isAbstract = true;
    return d;
}

ClassDefinition = ClassDeclaration ClassBody
ClassDefinitionOrStub = ClassDeclaration ( pSemiColon / ClassBody )
ClassBody = pLBrace ( ClassMember )* pRBrace

/*
ClassDefinition = d:ClassDeclaration pLBrace ownedMember:(ClassMember)* pRBrace {
    d.ownedMember = ownedMember;
    return d;
}
*/

ClassMember = documentation:documentComment?
            annotation:StereotypeAnnotations
            visibility:VisibilityIndicator?
            m:ClassMemberDefinition
{
    m.visibility = visibility;
    m.annotation = annotation;
    m.documentation = documentation;
    return m;
}

ClassMemberDefinition = ClassifierDefinitionOrStub / FeatureDefinitionOrStub

/*
ClassMemberDefinition = ClassifierDefinition
                    / ClassifierStubDeclaration
                    / FeatureDefinition
                    / FeatureStubDeclaration
*/

/* 
    ACTIVE CLASSES 
*/

ActiveClassDeclaration = abstract:kwAbstract? kwActive kwClass d:ClassifierSignature {
    if(abstract !== null) d.isAbstract = true;
    return d;
}

ActiveClassDefinition = ActiveClassDeclaration ActiveClassBody
ActiveClassDefinitionOrStub = ActiveClassDeclaration ( pSemiColon / ActiveClassBody )
ActiveClassBody = pLBrace ( ActiveClassMember )* pRBrace ( kwDo BehaviorClause )?

/*
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
*/

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
            annotation:StereotypeAnnotations
            visibility:VisibilityIndicator?
            m:ActiveClassMemberDefinition
{
    m.visibility = visibility;
    m.annotation = annotation;
    m.documentation = documentation;
    return m;
}

ActiveClassMemberDefinition = ClassMemberDefinition
                            / ActiveFeatureDefinitionOrStub

/*
     DATA TYPES 
*/
DataTypeDeclaration = abstract:kwAbstract? kwDataType d:ClassifierSignature {
    if(abstract !== null) d.isAbstract = true;
    return d;
}

DataTypeDefinition = DataTypeDeclaration StructuredBody
DataTypeDefinitionOrStub = DataTypeDeclaration ( pSemiColon / StructuredBody )
StructuredBody = pLBrace ( StructuredMember )* pRBrace

/*
DataTypeDefinition = d:DataTypeDeclaration pLBrace ownedMember:(StructuredMember)* pRBrace {
    d.ownedMember = ownedMember;
    return d;
}
*/

StructuredMember = documentation:documentComment?
            annotation:StereotypeAnnotations
            visibility:kwPublic?
            m:PropertyDefinition
{
    m.visibility = visibility;
    m.annotation = annotation;
    m.documentation = documentation;
    return m;
}

/* 
    ASSOCIATIONS 
*/

AssociationDeclaration = abstract:kwAbstract? kwAssoc d:ClassifierSignature {
    if(abstract !== null) d.isAbstract = true;
    return d;
}

AssociationDefinition = AssociationDeclaration StructuredBody
AssociationDefinitionOrStub = AssociationDeclaration ( pSemiColon / StructuredBody )

/*
AssociationDefinition =  d:AssociationDeclaration pLBrace
                        first:StructuredMember second:StructuredMember
                        other:(StructuredMember)* pRBrace {
    d.ownedMember = [first, second].concat(other);
    return d;
}
*/


/*
     ENUMERATIONS 
*/
EnumerationDeclaration = kwEnum name:name specialization:SpecializationClause? {
    let obj = new alf.EnumerationDefinition();
    obj.name = name;
    obj.specialization = specialization;
    return obj;
}

EnumerationDefinition = EnumerationDeclaration EnumerationBody
EnumerationDefinitionOrStub = EnumerationDeclaration ( pSemiColon / EnumerationBody )
EnumerationBody = pLBrace EnumerationLiteralName ( pComma EnumerationLiteralName )* pRBrace

/*
EnumerationDefinition = d:EnumerationDeclaration pLBrace 
                        first:EnumerationLiteralName other:(pComma n:EnumerationLiteralName { return n; } )*
                        pRBrace
{
    d.ownedElement = [first].concat(other);
    return d;
}   
*/

EnumerationLiteralName = documentation:documentComment? name:name {
    let obj = new alf.EnumerationLiteralName();
    obj.name = name;
    obj.documentation = documentation;
    obj.visibility = "public";
    return obj;
}

/* 
    SIGNALS 
*/
SignalDeclaration = abstract:kwAbstract? kwSignal d:ClassifierSignature {
    if(abstract !== null) d.isAbstract = true;
    return d;
}     

SignalDefinition = SignalDeclaration StructuredBody
SignalDefinitionOrStub = SignalDeclaration ( pSemiColon / StructuredBody )

/*
SignalDefinition = d:SignalDeclaration pLBrace ownedMember:(StructuredMember)* pRBrace {
    d.ownedMember = ownedMember;
    return d;
}               
*/

/* 
    ACTIVITIES 
*/

ActivityDeclaration = kwActivity Name ( TemplateParameters )? FormalParameters ( pColon TypePart )?
ActivityDefinition = ActivityDeclaration Block
ActivityDefinitionOrStub = ActivityDeclaration ( pSemiColon / Block )

/*
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
*/

FormalParameters = pLParen d:FormalParameterList? pRParen {
    return d === null ? new alf.NamespaceDefinition() : d;
}

FormalParameterList = first:FormalParameter other:(pColon p:FormalParameter { return p; } )* {
    let obj = new alf.NamespaceDefinition();
    obj.ownedMember = [first].concat(other);
    return obj;
}

FormalParameter = documentation:documentComment?
                annotation:StereotypeAnnotations
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

/*
ReturnParameter = pColon p:TypePart {
    p.direction = "return";
    return p;
}
*/

/*
    FEATURES 
*/

FeatureDefinitionOrStub = AttributeDefinition / OperationDefinitionOrStub
ActiveFeatureDefinitionOrStub = ReceptionDefinition / SignalReceptionDefinitionOrStub

/*
FeatureDefinition = AttributeDefinition / OperationDefinition

FeatureStubDeclaration = OperationStubDeclaration

ActiveFeatureDefinition = ReceptionDefinition / SignalReceptionDefinition

ActiveFeatureStubDeclaration = SignalReceptionStubDeclaration
*/

/* 
    PROPERTIES 
*/
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

Multiplicity = pLBracket d:MultiplicityRange pRBracket oau:OrderingAndUniqueness? {
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


MultiplicityRange = ( naturalLiteral pDoubleDot )? UnlimitedNaturalLiteral
UnlimitedNaturalLiteral =naturalLiteral / opMult

/*
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
*/

/* 
    OPERATIONS 
*/
OperationDeclaration = ( kwAbstract )? Name FormalParameters ( pColon TypePart )? ( RedefinitionClause )?
OperationDefinitionOrStub = OperationDeclaration ( pSemiColon / Block )
RedefinitionClause = kwRedefines QualifiedNameList

/*
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

*/

/* 
    RECEPTIONS 
*/

ReceptionDefinition = kwReceive QualifiedName pSemiColon
SignalReceptionDeclaration = kwReceive kwSignal Name ( SpecializationClause )?
SignalReceptionDefinitionOrStub = SignalReceptionDeclaration ( pSemiColon / StructuredBody )

/*
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
*/
