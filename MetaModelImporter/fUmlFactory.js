const fUML = require("../fUML/fUML");

module.exports = {
    createPackage(parentPackage, name, parameters) {
        let package = new fUML.Package();
        package.name = name;
        package.nestedPackage = new Array();
        package.nestingPackage = parentPackage;
        package.packagedElement = new Array();
        package.visibility = parameters.visibility;
        return package;
    },

    createClass(parentPackage, name, parameters) {

    }
}