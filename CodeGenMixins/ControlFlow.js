
var ControlFlowCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ControlFlow";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ControlFlowCodeGenMixin;
