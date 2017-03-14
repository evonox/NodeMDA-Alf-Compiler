
var DestroyLinkActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "DestroyLinkAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = DestroyLinkActionCodeGenMixin;
