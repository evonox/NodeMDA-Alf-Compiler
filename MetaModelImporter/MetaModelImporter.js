const factory = require("./fUmlFactory");
const mmQueryParser = require("./MetaModelQuery");

let mmQuery = null;

function processClasses(parentPackage, fumlPackage) {
    mmQuery.queryClasses(parentPackage).every((classHandle) => {
        let className = mmQuery.getElementName(classHandle);
        let fumlClass = factory.createClass(fumlPackage, className, {});
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

module.exports = {
    import(metaModel) {
        mmQuery = mmQueryParser.parse(metaModel);
        return build();
    }
}