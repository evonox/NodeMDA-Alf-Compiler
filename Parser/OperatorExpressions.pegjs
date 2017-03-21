/*
    Expressions
*/

Expression = UnaryExpression  ExpressionCompletion

NonNameExpression = NonNameUnaryExpression ExpressionCompletion

NameToExpressionCompletion = ( NameToPrimaryExpression )? PrimaryToExpressionCompletion

PrimaryToExpressionCompletion = PostfixExpressionCompletion ExpressionCompletion

ExpressionCompletion = AssignmentExpressionCompletion / ConditionalExpressionCompletion


/* 
    ASSIGNMENT EXPRESSIONS 
*/
AssignmentExpressionCompletion = AssignmentOperator Expression

AssignmentOperator = opAssign / opAsgnMod / opAsgnBitXor / opAsgnBitOr
                    / opAsgnBitAnd / opAsgnDiv / opAsgnMult / opAsgnSub
                    / opAsgnAdd / opAsgnZeroShiftRight / opAsgnRightShift / opAsgnLeftShift

/*
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
*/

/*
     CONDITIONAL-TEST EXPRESSIONS 
*/
ConditionalExpression = UnaryExpression ConditionalExpressionCompletion

ConditionalExpressionCompletion = ConditionalOrExpressionCompletion
                                ( opQuestionMark Expression pColon ConditionalExpression )?

/*
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
*/

/* 
    CONDITIONAL LOGICAL EXPRESSIONS 
*/
ConditionalAndExpression = UnaryExpression ConditionalAndExpressionCompletion

ConditionalAndExpressionCompletion = InclusiveOrExpressionCompletion ( opLogAnd InclusiveOrExpression )*

ConditionalOrExpression = UnaryExpression ConditionalOrExpressionCompletion

ConditionalOrExpressionCompletion = ConditionalAndExpressionCompletion ( opLogOr ConditionalAndExpression )*

/*
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
*/

/* 
    LOGICAL EXPRESSIONS 
*/

AndExpression = UnaryExpression AndExpressionCompletion

AndExpressionCompletion = EqualityExpressionCompletion ( opBitLogAnd EqualityExpression )*

ExclusiveOrExpression = UnaryExpression ExclusiveOrExpressionCompletion

ExclusiveOrExpressionCompletion = AndExpressionCompletion ( opBitLogXor AndExpression )*

InclusiveOrExpression = UnaryExpression InclusiveOrExpressionCompletion

InclusiveOrExpressionCompletion = ExclusiveOrExpressionCompletion ( opBitLogOr ExclusiveOrExpression )*

/*
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
*/

/* 
    EQUALITY EXPRESSIONS 
*/
EqualityExpression = UnaryExpression ClassificationExpressionCompletion

EqualityExpressionCompletion = ClassificationExpressionCompletion ( EqualityOperator ClassificationExpression)*

EqualityOperator = opEqual / opNotEqual

/*
ClassificationOrEqualityExpression = RelationalOrClassificationExpression / EqualityExpression
EqualityExpression = operand1:ClassificationOrEqualityExpression operator:EqualityOperator operand2:RelationalOrClassificationExpression {
    let obj = new alf.EqualityExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}
EqualityOrAndExpression = ClassificationOrEqualityExpression / AndExpression
*/

/* 
    CLASSIFICATION EXPRESSIONS 
*/
ClassificationExpression = UnaryExpression ClassificationExpressionCompletion

ClassificationExpressionCompletion = RelationalExpressionCompletion ( ClassificationOperator QualifiedName )?

ClassificationOperator = kwInstanceOf / kwHasType

/*
RelationalOrClassificationExpression = ShiftOrRelationalExpression / ClassificationExpression
ClassificationExpression = operand:ShiftOrRelationalExpression operator:ClassificationOperator typeName:QualifiedName {
    let obj = new alf.ClassificationExpression();
    obj.operand = operand;
    obj.operator = operator;
    obj.typeName = typeName;
    return obj;
}
*/

/* 
    RELATIONAL EXPRESSIONS 
*/
RelationalExpression = UnaryExpression RelationalExpressionCompletion

RelationalExpressionCompletion = ShiftExpressionCompletion ( RelationalOperator ShiftExpression )?

RelationalOperator = opLessOrEqual / opGreaterOrEqual / opGreater / opLess

/*
ShiftOrRelationalExpression = ArithmeticOrShiftExpression / RelationalExpression
RelationalExpression = operand1:ArithmeticOrShiftExpression operator:RelationalOperator operand2:ArithmeticOrShiftExpression {
    let obj = new alf.RelationalExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}
*/
/* 
    SHIFT EXPRESSIONS 
*/
ShiftExpression = UnaryExpression ShiftExpressionCompletion

ShiftExpressionCompletion = AdditiveExpressionCompletion ( ShiftOperator AdditiveExpression )*

ShiftOperator = opLeftShift / opRightShift / opZeroShiftRight

/*
ArithmeticOrShiftExpression = UnaryOrArithmeticExpression / ShiftExpression
ShiftExpression = operand1:ArithmeticOrShiftExpression operator:ShiftOperator operand2:UnaryOrArithmeticExpression {
    let obj = new alf.ShiftExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}
*/


/*
    ARITHMETIC EXPRESSIONS
*/
MultiplicativeExpression = UnaryExpression MultiplicativeExpressionCompletion

MultiplicativeExpressionCompletion = ( MultiplicativeOperator UnaryExpression )*

MultiplicativeOperator = opMult / opDiv / opMod

AdditiveExpression = UnaryExpression AdditiveExpressionCompletion

AdditiveExpressionCompletion = MultiplicativeExpressionCompletion ( AdditiveOperator MultiplicativeExpression)*

AdditiveOperator = opAdd / opSub

/*
UnaryOrArithmeticExpression = UnaryOrMultiplicativeExpression / AdditiveExpression
AdditiveExpression = operand1:UnaryOrMultiplicativeExpression operator:AdditiveOperator operand2:UnaryOrMultiplicativeExpression {
    let obj = new alf.ArithmeticExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}

UnaryOrMultiplicativeExpression = UnaryExpression / MultiplicativeExpression
MultiplicativeExpression = operand1:UnaryOrMultiplicativeExpression operator:MultiplicativeOperator operand2:UnaryExpression {
    let obj = new alf.ArithmeticExpression();
    obj.operand1 = operand1;
    obj.operator = operator;
    obj.operand2 = operand2;
    return obj;
}
*/

/*
    Unary operator expressions
*/
UnaryExpression = PostfixOrCastExpression / NonPostfixNonCastUnaryExpression

PostfixOrCastExpression = NonNamePostfixOrCastExpression
                        / NameOrPrimaryExpression PostfixExpressionCompletion

NonNameUnaryExpression = NonNamePostfixOrCastExpression / NonPostfixNonCastUnaryExpression

NonNamePostfixOrCastExpression = pLParen
                                    ( kwAny pRParen CastCompletion
                                    / PotentiallyAmbiguousQualifiedName
                                        ( pRParen CastCompletion
                                        / NameToExpressionCompletion pRParen PostfixExpressionCompletion
                                        )
                                    / NonNameExpression pRParen PostfixExpressionCompletion
                                    )
                                    / BaseExpression PostfixExpressionCompletion

NonPostfixNonCastUnaryExpression = PrefixExpression
                                / NumericUnaryExpression
                                / BooleanNegationExpression
                                / BitStringComplementExpression
                                / IsolationExpression

BooleanNegationExpression = opLogNot UnaryExpression
BitStringComplementExpression = opBitNot UnaryExpression

NumericUnaryExpression = NumericUnaryOperator UnaryExpression
NumericUnaryOperator = opAdd / opSub

IsolationExpression = opDollar UnaryExpression

CastExpression = pLParen TypeName pRParen CastCompletion

CastCompletion = PostfixOrCastExpression
                / BooleanNegationExpression
                / BitStringComplementExpression
                / IsolationExpression

/*
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
*/

/*
    Increment and decrement operators
*/

PostfixExpressionCompletion = PrimaryExpressionCompletion ( PostfixOperation )?

/*
IncrementOrDecrementExpression = e:PostfixExpression { e.isPrefix = false; }
                    / e:PrefixExpression { e.isPrefix = true; }
*/

PostfixOperation = AffixOperator

/*
PostfixExpression = operand:LeftHandSide operator:AffixOperator {
    let obj = new alf.IncrementOrDecrementExpression();
    obj.operator = operator;
    obj.operand = operand;
    return obj;
}
*/

PrefixExpression = AffixOperator PrimaryExpression

/*
PrefixExpression = operator:AffixOperator operand:LeftHandSide {
    let obj = new alf.IncrementOrDecrementExpression();
    obj.operator = operator;
    obj.operand = operand;
    return obj;
}
*/

AffixOperator = opIncrement / opDecrement


