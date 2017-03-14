
var WriteLinkActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "WriteLinkAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = WriteLinkActionCodeGenMixin;
