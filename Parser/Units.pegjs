/*
    UnitDefinition
*/
UnitDefinition = namespaceName:NamespaceDeclaration?
                importDec:(ImportDeclaration)*
                documentation:DocumentationComment?
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

NamespaceDeclaration = kwNamespace q:QualifiedName pSemicolon { return q; }

ImportDeclaration = visibility:ImportVisibilityIndicator kwImport i:ImportReference pSemicolon {
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

TaggedValueList = first:TaggedValue other:( pCommna t:TaggedValue { return t;} )* {
    let obj = new alf.TaggedValueList();
    obj.taggedValue = [first].concat(other);
    return obj;
}

TaggedValue = name:name pFatArrow t:LiteralValue {
    t.name = name;
    return t;
}

LiteralValue = value:BooleanLiteral {
    let obj = new alf.TaggedValue();
    obj.value = value;
    return value;
}
/ operator:NumericUnaryOperator? value:NaturalLiteral {
    let obj = new alf.TaggedValue();
    obj.value = value;
    obj.operator = operator;
    return value;
}
/ value:UnboundedValueLiteral {
    let obj = new alf.TaggedValue();
    obj.value = value;
    return value;
}
/ value:StringLiteral {
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

PackagedElement = documentation:DocumentationComment? annotation:StereotypeAnnotation*
                visibility:ImportVisibilityIndicator m:PackagedElementDefinition 
{
    m.visibility = visibility;
    m.annotation = annotation;
    m.documentation = documentation;
    return m;
}

PackagedElementDefinition = NamespaceDefinition / NamespaceStubDeclaration

NamespaceStubDeclaration = PackageStubDeclaration / ClassifierStubDeclaration

PackageStubDeclaration = m:PackageDeclaration pSemicolon {
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

ClassifierStubDeclaration = d:ClassifierDeclaration pSemicolon { d.isStub = true; return d; }

ClassifierSignature = name:name d:TemplateParameters? specialization:SpecializationClause? {
    if(d === null) d = new alf.ClassifierDefinition();
    d.name = name;
    d.specialization = specialization;
}

TemplateParameters = opLess first:ClassifierTemplateParameter other:(pComma p:ClassifierTemplateParameter { return p; })* opGreater
{
    let obj = new alf.ClassifierDefinition();
    obj.ownedMember = [first].concat(other);
    return obj;
}

ClassifierTemplateParameter = documentation:DocumentationComment? name:name
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

