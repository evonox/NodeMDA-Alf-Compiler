
const fUML = require("../fUML/fUML");

var ControlFlowCodeGenMixin = (Base) => class extends Base {

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ControlFlowCodeGenMixin;
