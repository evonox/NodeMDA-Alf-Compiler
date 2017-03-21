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
        / LocalNameDeclarationOrExpressionStatement
        / LocalNameDeclarationStatement
        / IfStatement
        / SwitchStatement
        / WhileStatement
        / ForStatement
        / DoStatement
        / BreakStatement
        / ReturnStatement
        / AcceptStatement
        / ClassifyStatement

/* 
    ANNOTATED STATEMENTS 
*/
AnnotatedStatement = pSlashSlashAt Annotations LineTerminator Statement
Annotations = Annotation ( opAt Annotation )*
Annotation = name ( pLParen NameList pRParen )?
NameList = name ( pComma name )*

/*
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
*/

/*
     IN-LINE STATEMENTS 
*/

InLineStatement = pSlashStarAt name pLParen name pRParen documentComment

/*
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
*/


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

/* 
    LOCAL NAME DECLARATION AND EXPRESSION STATEMENTS 
*/
LocalNameDeclarationOrExpressionStatement = PotentiallyAmbiguousQualifiedName
                                            ( 
                                                ( MultiplicityIndicator )? Name LocalNameDeclarationStatementCompletion
                                                / NameToExpressionCompletion pSemiColon
                                            )
                                            / NonNameExpression pSemiColon

LocalNameDeclarationStatement = kwLet Name pColon TypeName ( MultiplicityIndicator )? LocalNameDeclarationStatementCompletion

LocalNameDeclarationStatementCompletion = opAssign InitializationExpression pSemiColon

InitializationExpression = Expression / SequenceInitializationExpression / InstanceInitializationExpression  

InstanceInitializationExpression = kwNew Tuple

/*
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
*/

/*
// ExpressionStatement
ExpressionStatement = expression:Expression {
    let obj = new alf.ExpressionStatement();
    obj.expression = expression;
    return obj;
}
*/

/* 
    IF STATEMENTS 
*/

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

/* 
    SWITCH STATEMENTS 
*/

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

/* 
    WHILE STATEMENTS 
*/

WhileStatement = kwWhile pLParen condition:Expression pRParen body:Block {
    let obj = new alf.WhileStatement();
    obj.condition = condition;
    obj.body = body;
    return obj;
}

/* 
    DO STATEMENTS 
*/

DoStatement = kwDo body:Block kwWhile pLParen condition:Expression pRParen pSemiColon {
    let obj = new alf.DoStatement();
    obj.condition = condition;
    obj.body = body;
    return obj;
}

/* 
    FOR STATEMENTS
*/

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
/ typeName:QualifiedName variable:name pColon expression1:Expression {
    let obj = new alf.LoopVariableDefinition();
    obj.typeName = typeName;
    obj.variable = variable;
    obj.expression1 = expression1;
    obj.typeIsInferred = false;
    return obj;
}

/* 
    BREAK STATEMENTS 
*/
BreakStatement = kwBreak pSemiColon { return new alf.BreakStatement(); }

/* 
    RETURN STATEMENTS 
*/
ReturnStatement = kwReturn expression:Expression? pSemiColon {
    let obj = new alf.ReturnStatement();
    obj.expression = expression;
    return obj;
}

/* 
    ACCEPT STATEMENTS 
*/

AcceptStatement = AcceptClause ( SimpleAcceptStatementCompletion / CompoundAcceptStatementCompletion )

SimpleAcceptStatementCompletion = pSemiColon

CompoundAcceptStatementCompletion = Block ( kwOr AcceptBlock )*

AcceptBlock = AcceptClause Block

AcceptClause = kwAccept pLParen name:( n:name pColon { return n; })? signalNames:QualifiedNameList pRParen {
    let obj = new alf.AcceptBlock();
    obj.name = name;
    obj.signalNames = signalNames;
    return obj;
}

/*
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
*/


/* 
    CLASSIFY STATEMENTS 
*/

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

QualifiedNameList = first:QualifiedName other:( pComma qn:QualifiedName )* {
    let obj = new alf.QualifiedNameList();
    obj.name = [first].concat(other);
    return obj;
} 


