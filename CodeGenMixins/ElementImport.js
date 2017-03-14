
var ElementImportCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ElementImport";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ElementImportCodeGenMixin;
