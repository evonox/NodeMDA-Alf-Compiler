
const fUML = require("../fUML/fUML");

var OutputPinCodeGenMixin = (Base) => class extends Base {

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = OutputPinCodeGenMixin;
