
const fUML = require("../fUML/fUML");

var DecisionNodeCodeGenMixin = (Base) => class extends Base {

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = DecisionNodeCodeGenMixin;
