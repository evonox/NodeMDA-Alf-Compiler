{
    var tokenSeparator = "\n";
    var subTokenSeparator = " ";

    function addTokenType(tokenType, tokenValue) {
        return tokenType + subTokenSeparator + tokenValue;
    }

    function addLocationToToken(token) {
        let tokenLocation = location();
        return token + subTokenSeparator + tokenLocation.start.line + subTokenSeparator 
                + tokenLocation.start.column + tokenSeparator;
    }
}

/*
    Top-level rules
*/

InputText = elements:(InputElement+) {
    return elements.filter(function(item){ return item != undefined }).join("");
}

InputElement = WhiteSpace { return undefined; } 
                / LexicalComment { return undefined; } 
                / token:Token { return token; }

Token = token:( DocumentationComment / ReservedWord / Punctuation / Operator / Literal / Name) {
    return addLocationToToken(token);
}

/*
    Operators
*/

Operator 
= operatorName:(
 ">>>" / "<<=" / ">>=" / ">>>=" / "<<" / ">>"
/ "==" / "<=" / ">=" / "!=" / "&&" / "||" / "++" / "--"
/ "+=" / "-=" / "*=" / "/=" / "&=" / "|=" / "^=" / "%="
/ "=" / ">" / "<" / "!" / "~" / "?" / "@" / "$"
/ "+" / "-" / "*" / "/" / "&" / "|" / "^" / "%"
) {
    return addTokenType("op", operatorName);
}

/*
    Punctuation
*/

Punctuation
= punctuationName:( ".." / "::" / "=>" / "->" / "(" / ")" / "{" / "}" / "[" / "]" / ";" / "," / "." / ":" ) {
    return addTokenType("p", punctuationName);
}

/*
    Literals
*/

Literal = PrimitiveLiteral

PrimitiveLiteral = value:BooleanLiteral { return addTokenType("blt", '"' + value + '"'); }
                 / value:NaturalLiteral { return addTokenType("nlt", '"' + value + '"'); }
                 / value:StringLiteral { return addTokenType("slt", '"' + value + '"'); }
                 //  / value:UnboundedValueLiteral
                 // The above rule must be recognized using multiplication operator token in the syntax parser

BooleanLiteral = "true" / "false"

StringLiteral = "\"" chars:( StringCharacter )* "\"" { return chars.join(""); }
StringCharacter = ! ( "\"" / "\\") character:InputCharacter { return character; } / EscapeSequence

UnboundedValueLiteral = "*"

NaturalLiteral = number:BinaryLiteral  { return parseInt(number, 2).toString(); }
                / number:HexLiteral  { return parseInt(number, 16).toString(); }
                / number:OctalLiteral { return parseInt(number, 8).toString(); }
                / number:DecimalLiteral { return parseInt(number).toString(); }

DecimalLiteral = "0" / first:NonzeroDigit other:( ( "_" )? digit:Digit { return digit; } )* 
{ return [first].concat(other).join(""); }

BinaryLiteral = BinaryPrefix first:BinaryDigit other:( ("_")? digit:BinaryDigit { return digit; } )*
{ return [first].concat(other).join(""); }
BinaryPrefix = "0b" / "0B"
BinaryDigit = [0-1]

HexLiteral = HexPrefix first:HexDigit other:( ("_" )? digit:HexDigit { return digit; } )*
{ return [first].concat(other).join(""); }
HexPrefix = "0" "x" / "0" "X"
HexDigit = Digit / [A-Fa-f]

OctalLiteral = "0" ("_" )? first:OctalDigit other:( ("_")? digit:OctalDigit { return digit; } )*
{ return [first].concat(other).join(""); }
OctalDigit = [0-7]

/*
    Reserved words
*/
ReservedWord
= keywordName:("abstract" / "accept" / "active" / "activity" / "allInstances" / "any"
/ "as" / "assoc" / "break" / "case" / "class" / "classify" / "clearAssoc"
/ "compose" / "createLink" / "datatype" / "default" / "destroyLink" / "do"
/ "else" / "enum" / "for" / "from" / "hastype" / "if" / "import" / "in"
/ "inout" / "instanceof" / "let" / "namespace" / "new" / "nonunique" / "null"
/ "or" / "ordered" / "out" / "package" / "private" / "protected" / "public"
/ "receive" / "redefines" / "reduce" / "return" / "sequence" / "specializes"
/ "super" / "signal" / "switch" / "this" / "to" / "while") {
    return addTokenType("kw", keywordName);
}

/*
    Named elements
*/

Name = name:(Identifier / UnrestrictedName) {
    name = "\"" + name + "\""; 
    return addTokenType("n", name);
}
Identifier = ! (ReservedWord / BooleanLiteral) identifier:IdentifierChars { 
    return identifier; 
}

IdentifierChars = first:IdentifierLetter other:( IdentifierLetterOrDigit )* {
    return [first].concat(other).join("");
}

IdentifierLetterOrDigit = IdentifierLetter / Digit
IdentifierLetter = [A-Za-z_]
Digit = "0" / NonzeroDigit
NonzeroDigit = [1-9]

UnrestrictedName = "'" chars:NameCharacter+ "'" { return chars.join(""); }
NameCharacter = ! ("'" / "\\") character:(InputCharacter / EscapeSequence) { return character; }
EscapeSequence = "\\" escapeChar:EscapedCharacter { return "\\" + escapeChar; }
EscapedCharacter = "'" / "\"" / "b" / "f" / "t" / "n" / "\\"

/*
    Comments
*/
LexicalComment = EndOfLineComment / InlineComment 

DocumentationComment = "/**" commentText:CommentText "*/" {
    commentText = '"' + commentText + '"';
    return addTokenType("dc", commentText);
}

EndOfLineComment = "//" ( NotAt InputCharacter* )? LineTerminator

InlineComment = "/*" (NotStartNotAt CommentText)? "*/"
CommentText = chars:(NotStar)+ otherText:(CommentText)? {
    chars = chars.join("");
    if(otherText !== null) chars += otherText;
    chars = chars.replace(/\r/g, "");
    chars = chars.replace(/\n/g, "\\n");
    return chars;
}
StarCommentText = "*" (NotStarNotSlash CommentText )?

NotAt = ! ( "@" ) InputCharacter
NotStar = ! ( "*" ) character:InputCharacter { return character; } / LineTerminator
NotStartNotAt = ! ( "*" / "@" ) InputCharacter / LineTerminator
NotStarNotSlash = ! ("*/" ) InputCharacter / LineTerminator

WhiteSpace = " " / "\t" / "\f" / LineTerminator
LineTerminator = "\n" / "\r"
InputCharacter = !(LineTerminator) character:(.) { return character; }