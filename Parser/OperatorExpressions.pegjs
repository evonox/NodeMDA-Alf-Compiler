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

RelationalOrClassificationExpression = ArithmeticOrRelationalExpression / ClassificationExpression
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