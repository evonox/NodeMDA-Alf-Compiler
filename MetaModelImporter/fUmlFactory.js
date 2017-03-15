const fUML = require("../fUML/fUML");

function parseLowerBound(multiplicity) {
    multiplicity = multiplicity === null || multiplicity === undefined ? "1..1" : multiplicity;
    let parts = multiplicity.split("..");
    return parts[0];
}

function parseUpperBound(multiplicity) {
    multiplicity = multiplicity === null || multiplicity === undefined ? "1..1" : multiplicity;
    let parts = multiplicity.split("..");
    return parts[1];
}

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
    },

    createAttribute(owningClass, name, parameters) {
        let attribute = new fUML.Property();
        attribute.name = name;
        attribute.lower = parseLowerBound(parameters.multiplicity);
        attribute.upper = parseUpperBound(parameters.multiplicity);
        attribute.isReadOnly = parameters.readOnly;
        attribute.visibility = parameters.visibility;
        attribute.owner = owningClass;
        owningClass.ownedAttribute.push(attribute);
        return attribute;
    },

    createOperation(owningClass, name, parameters) {
        let operation = new fUML.Operation();
        operation.name = name;
        operation.isAbstract = parameters.isAbstract;
        operation.isStatic = parameters.isStatic;
        operation.visibility = parameters.visibility;
        operation.ownedParameter = new Array();
        operation.method = new Array();
        operation.owner = owningClass;
        owningClass.ownedOperation.push(operation);
        return operation;
    }
}