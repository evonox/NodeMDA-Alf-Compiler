
var ExpansionNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ExpansionNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ExpansionNodeCodeGenMixin;
