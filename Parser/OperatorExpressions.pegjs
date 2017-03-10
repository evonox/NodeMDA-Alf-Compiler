/*
    Binary operator expressions
*/


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