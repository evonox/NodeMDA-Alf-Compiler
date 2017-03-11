{
    var alf = require("../Alf/Alf");
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
    Function names
*/
fnIsUnique = namePrefix '"' content:"isUnique" '"' tokenSuffix { return content; }
fnForAll = namePrefix '"' content:"forAll" '"' tokenSuffix { return content; }
fnExists = namePrefix '"' content:"exists" '"' tokenSuffix { return content; }
fnOne = namePrefix '"' content:"one" '"' tokenSuffix { return content; }
fnCollect = namePrefix '"' content:"collect" '"' tokenSuffix { return content; }
fnIterate = namePrefix '"' content:"iterate" '"' tokenSuffix { return content; }
fnSelect = namePrefix '"' content:"select" '"' tokenSuffix { return content; }
fnReject = namePrefix '"' content:"reject" '"' tokenSuffix { return content; }

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