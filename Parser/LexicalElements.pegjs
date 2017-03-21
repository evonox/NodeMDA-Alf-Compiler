
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
pSlashSlashAt = punPrefix "//@" tokenSuffix
pSlashStarAt = punPrefix "/*@" tokenSuffix

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
    Function and annotation names
*/
fnIsUnique = namePrefix '"' content:"isUnique" '"' tokenSuffix { return content; }
fnForAll = namePrefix '"' content:"forAll" '"' tokenSuffix { return content; }
fnExists = namePrefix '"' content:"exists" '"' tokenSuffix { return content; }
fnOne = namePrefix '"' content:"one" '"' tokenSuffix { return content; }
fnCollect = namePrefix '"' content:"collect" '"' tokenSuffix { return content; }
fnIterate = namePrefix '"' content:"iterate" '"' tokenSuffix { return content; }
fnSelect = namePrefix '"' content:"select" '"' tokenSuffix { return content; }
fnReject = namePrefix '"' content:"reject" '"' tokenSuffix { return content; }

annInline = namePrefix '"' content:"inline" '"' tokenSuffix { return content; }


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

// MOVE THIS TO LEXER
LineTerminator = "\n" / "\r"
InputCharacter = !(LineTerminator) character:(.) { return character; }

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