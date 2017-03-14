
var PackageableElementCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "PackageableElement";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = PackageableElementCodeGenMixin;
