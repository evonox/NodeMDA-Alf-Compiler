const fs = require("fs");
const path = require("path");

const alfFiles = fs.readdirSync("./Alf/").filter(file => file.endsWith(".js"));



// generate require statements
alfFiles.every( (filename) => {
    let className = path.basename(filename, ".js");
    if(className == "Alf") return true;
    let mixinContent = `
var ${className}MappingMixin = (Base) => class extends Base {

    map() {

    }
}

module.exports = ${className}MappingMixin;
`
    let mixinFileName = path.join("./MappingMixins", className + ".js");
    fs.writeFileSync(mixinFileName, mixinContent);
    return true;
});