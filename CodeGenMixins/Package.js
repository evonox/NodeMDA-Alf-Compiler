
var PackageCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Package";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "package";

        json.childPackages = this.nestedPackage.map((package) => {
            return package.genJson();
        });

        json.classes = this.packagedElement
        .filter((element) => {
            return element.getType() === "Class";
        })
        .map((element) => {
                return element.genJson();
        });       

        return json;
    }
}

module.exports = PackageCodeGenMixin;
