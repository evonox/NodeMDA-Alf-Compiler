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

function parseMetaData(fumlElement, parameters) {
    fumlElement.ownedComment = parameters.comment;
   
    // REMARK: The following lines are possible extensions for fUML standard. I could find attributes
    // to attach tag values and stereotypes
    fumlElement.stereotypes = parameters.stereotypes;
    fumlElement.tagValues = parameters.tagValues;
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
        // TODO: Package meta-data not supported for now.
        //parseMetaData(packageUML, parameters);
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
        parseMetaData(classUML, parameters);
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
        parseMetaData(attribute, parameters);
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
        parseMetaData(operation, parameters);
        return operation;
    }
}