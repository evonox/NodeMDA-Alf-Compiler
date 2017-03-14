
var NamespaceCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Namespace";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = NamespaceCodeGenMixin;
