
var PackageImportCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "PackageImport";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = PackageImportCodeGenMixin;
