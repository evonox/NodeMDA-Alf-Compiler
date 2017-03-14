
var JoinNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "JoinNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = JoinNodeCodeGenMixin;
