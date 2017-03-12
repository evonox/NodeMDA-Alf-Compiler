call pegjs .\Lexer\lexer.pegjs
call cd .\Parser
call copy /B /D Header.pegjs+Statements.pegjs+OperatorExpressions.pegjs+PrimaryExpressions.pegjs+LexicalElements.pegjs SyntaxParser.pegjs
call pegjs SyntaxParser.pegjs
call cd..
