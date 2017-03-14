
var ReadLinkActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ReadLinkAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ReadLinkActionCodeGenMixin;
