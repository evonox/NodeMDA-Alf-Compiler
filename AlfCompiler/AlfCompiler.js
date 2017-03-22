const lexer = require("./Lexer/lexer");
const parser = require("./Parser/SyntaxParser");


module.exports = {
    parse: function(sourceCodeInAlf) {
        // lexer phase
        let lexerOutput = null;
        try {
            lexerOutput = lexer.parse(sourceCodeInAlf);
        }
        catch(e) {
            // TODO: Format exception output from Lexer
            console.log("LEXER EXCEPTION:");
            console.dir(e);
            return null;
            
        }

        // Syntax parsing
        let parserOutput = null;
        try {
            parserOutput = parser.parse(JSON.stringify(lexerOutput));
        }
        catch(e) {
            // TODO: Format output of syntax parser exception
            console.log("SYNTAX PARSER EXCEPTION:");
            console.dir(e);
            return null;
        }
        return parserOutput;
    }
}