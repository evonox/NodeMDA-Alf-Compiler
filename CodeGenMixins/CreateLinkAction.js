
var CreateLinkActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "CreateLinkAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = CreateLinkActionCodeGenMixin;
