const fs = require("fs");
const alfParser = require("./AlfCompiler/AlfCompiler");

let alfSource = fs.readFileSync("test.alf").toString();
let output = alfParser.parse(alfSource);
if(output !== null) {
    fs.writeFileSync("test-alf-result.txt", JSON.stringify(output, null, 4));
}

