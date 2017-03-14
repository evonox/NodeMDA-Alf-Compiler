
var FlowFinalNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "FlowFinalNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = FlowFinalNodeCodeGenMixin;
