const fUML = require("../fUML/fUML");

module.exports = {
    createPackage(parentPackage, name, parameters) {
        let packageUML = new fUML.Package();
        packageUML.name = name;
        packageUML.nestedPackage = new Array();
        packageUML.nestingPackage = parentPackage;
        packageUML.packagedElement = new Array();
        packageUML.visibility = parameters.visibility;
        if(parentPackage !== null)
            parentPackage.nestedPackage.push(packageUML);
        return packageUML;
    },

    createClass(parentPackage, name, parameters) {

    }
}