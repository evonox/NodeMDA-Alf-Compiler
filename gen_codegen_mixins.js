const fs = require("fs");
const path = require("path");

const alfFiles = fs.readdirSync("./fUML/").filter(file => file.endsWith(".js"));



// generate require statements
alfFiles.every( (filename) => {
    let className = path.basename(filename, ".js");
    if(className == "fUML") return true;
    let mixinContent = `
const fUML = require("../fUML/fUML");

var ${className}CodeGenMixin = (Base) => class extends Base {

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ${className}CodeGenMixin;
`
    let mixinFileName = path.join("./CodeGenMixins", className + ".js");
    fs.writeFileSync(mixinFileName, mixinContent);
    return true;
});