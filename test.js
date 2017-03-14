const lexer = require("./Lexer/lexer");
const fs = require("fs");
const alf = require("./Alf/Alf");
const fuml = require("./fUML/fUML");

let alfSource = fs.readFileSync("./example.alf").toString();
let lexerOutput = lexer.parse(alfSource);
fs.writeFileSync("./lexerOutput.txt", lexerOutput);
