const factory = require("./fUmlFactory");
const mmQueryParser = require("./MetaModelQuery");

let mmQuery = null;

function processMetaData(elementHandle, parameters) {
    parameters.comment = mmQuery.getElementComment(elementHandle);
    parameters.stereotypes = mmQuery.getElementStereotypes(elementHandle);
    parameters.tagValues = mmQuery.getElementTagValues(elementHandle);
}

function processOperations(parentClass, fumlClass) {
    mmQuery.getClassOperations(parentClass).every((operationHandle) => {
        let operationJSON = mmQuery.getOperationInfo(operationHandle);
        processMetaData(operationHandle, operationJSON);
        factory.createOperation(fumlClass, operationJSON.name, operationJSON);
        return true;
    });
}

function processAttributes(parentClass, fumlClass) {
    mmQuery.getClassAttributes(parentClass).every((attributeHandle) => {
        let attributeJSON = mmQuery.getAttributeInfo(attributeHandle);
        processMetaData(attributeHandle, attributeJSON);
        factory.createAttribute(fumlClass, attributeJSON.name, attributeJSON);
        return true;
    });
}

function processClasses(parentPackage, fumlPackage) {
    mmQuery.queryClasses(parentPackage).every((classHandle) => {
        let className = mmQuery.getElementName(classHandle);
        let parameters = {};
        processMetaData(classHandle, parameters);
        let fumlClass = factory.createClass(fumlPackage, className, parameters);
        processAttributes(classHandle, fumlClass);
        processOperations(classHandle, fumlClass);
        return true;
    });
}

function processPackages(parentPackage, fumlPackage) {
    mmQuery.queryChildPackages(parentPackage).every((package) => {
        let packageName = mmQuery.getElementName(package);
        let parameters = {};
        // TODO: Package metadata are not supported currently in NodeMDA
        //processMetaData(package, parameters);
        let fumlChildPackage = factory.createPackage(fumlPackage, packageName, parameters);
        processPackageChildElements(package, fumlChildPackage);
        return true;
    });
}

function processPackageChildElements(parentPackage, fumlPackage) {
    processPackages(parentPackage, fumlPackage);
    processClasses(parentPackage, fumlPackage);
}

function build() {
    let rootPackage = mmQuery.getRootPackage();
    let fumlPackage = factory.createPackage(null, "", {});
    processPackageChildElements(rootPackage, fumlPackage);
    return fumlPackage;
}

module.exports = {
    import(metaModel) {
        mmQuery = mmQueryParser.parse(metaModel);
        return build();
    }
}