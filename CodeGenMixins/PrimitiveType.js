
const fUML = require("../fUML/fUML");

var PrimitiveTypeCodeGenMixin = (Base) => class extends Base {

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = PrimitiveTypeCodeGenMixin;
