const factory = require("./fUmlFactory");
const mmQueryParser = require("./MetaModelQuery");

let mmQuery = null;

function processPackage(parentPackage, fumlPackage) {
    mmQuery.queryChildPackages(parentPackage).every((package) => {
        let packageName = mmQuery.getElementName(package);
        let fumlChildPackage = factory.createPackage(fumlPackage, packageName, {});
        processPackage(package, fumlChildPackage);
        return true;
    });
}

function build() {
    let rootPackage = mmQuery.getRootPackage();
    let fumlPackage = factory.createPackage(null, "", {});
    processPackage(rootPackage, fumlPackage);
    return fumlPackage;
}

module.exports = {
    import(metaModel) {
        mmQuery = mmQueryParser.parse(metaModel);
        return build();
    }
}