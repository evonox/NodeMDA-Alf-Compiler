/*
    Primary expressions
*/
PrimaryExpression = NameExpression / NonNamePrimaryExpression
NonNamePrimaryExpression = LiteralExpression / ThisExpression / ParenthesizedExpression / PropertyAccessExpression
        / InvocationExpression / InstanceCreationExpression / LinkOperationExpression / ClassExtentExpression
        / SequenceConstructionExpression / SequenceAccessExpression / SequenceOperationExpression 
        / SequenceReductionExpression / SequenceExpansionExpression

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
PropertyAccessExpression = featureReference:FeatureReference {
    let obj = new alf.PropertyAccessExpression();
    obj.featureReference = featureReference;
    return obj;
}
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
InvocationTarget = BehaviorInvocationTarget / FeatureInvocationTarget / SuperInvocationTarget;

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
NamedExpression = name:name pFatArrow expression:ExpressionExpression {
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

CollectOrIterateOperation = operation(fnCollect / fnIterate) {
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