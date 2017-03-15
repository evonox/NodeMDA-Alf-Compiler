const factory = require("./fUmlFactory");
const mmQueryParser = require("./MetaModelQuery");

let mmQuery = null;

function processOperations(parentClass, fumlClass) {
    mmQuery.getClassOperations(parentClass).every((operationHandle) => {
        let operationJSON = mmQuery.getOperationInfo(operationHandle);
        factory.createOperation(fumlClass, operationJSON.name, operationJSON);
        return true;
    });
}

function processAttributes(parentClass, fumlClass) {
    mmQuery.getClassAttributes(parentClass).every((attributeJSON) => {
        factory.createAttribute(fumlClass, attributeJSON.name, attributeJSON);
        return true;
    });
}

function processClasses(parentPackage, fumlPackage) {
    mmQuery.queryClasses(parentPackage).every((classHandle) => {
        let className = mmQuery.getElementName(classHandle);
        let fumlClass = factory.createClass(fumlPackage, className, {});
        processAttributes(classHandle, fumlClass);
        processOperations(classHandle, fumlClass);
        return true;
    });
}

function processPackages(parentPackage, fumlPackage) {
    mmQuery.queryChildPackages(parentPackage).every((package) => {
        let packageName = mmQuery.getElementName(package);
        let fumlChildPackage = factory.createPackage(fumlPackage, packageName, {});
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

// TODO: Tags, comment, stereotypes !!!!!!
module.exports = {
    import(metaModel) {
        mmQuery = mmQueryParser.parse(metaModel);
        return build();
    }
}