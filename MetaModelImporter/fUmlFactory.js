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
        let classUML = new fUML.Class();
        classUML.name = name;
        classUML.isActive = false;
        classUML.ownedAttribute = new Array();
        classUML.ownedOperation = new Array();
        classUML.ownedReception = new Array();
        classUML.superClass = new Array();
        classUML.owner = parentPackage;
        parentPackage.packagedElement.push(classUML);
        return classUML;
    }
}