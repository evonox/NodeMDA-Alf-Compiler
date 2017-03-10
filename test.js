const lexer = require("./Lexer/lexer");
const fs = require("fs");
const alf = require("./Alf/Alf");

let alfSource = fs.readFileSync("./example.alf").toString();
let lexerOutput = lexer.parse(alfSource);
fs.writeFileSync("./lexerOutput.txt", lexerOutput);
