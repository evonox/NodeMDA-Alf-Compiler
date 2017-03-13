const fs = require("fs");
const path = require("path");

const alfFiles = fs.readdirSync("./fUML/").filter(file => file.endsWith(".js"));

let facadeContent = "";

// generate require statements
alfFiles.every( (filename) => {
    let className = path.basename(filename, ".js");
    if(className == "fUML") return true;
    facadeContent += `const ${className} = require("./${className}.js");\n`;
    return true;
});
facadeContent += "\n";

// generate module export
facadeContent += "module.exports = {\n";
alfFiles.every( (filename, index) => {
    let className = path.basename(filename, ".js");
    if(className == "fUML") return true;
    facadeContent += `\t${className}: ${className}`;
    if(index != alfFiles.length - 1) facadeContent += ",";
    facadeContent += "\n";
    return true;
});
facadeContent += "}"

fs.writeFileSync("./fUML/fUML.js", facadeContent);