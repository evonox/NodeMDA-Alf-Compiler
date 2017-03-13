
const fUML = require("../fUML/fUML");

var DestroyObjectActionCodeGenMixin = (Base) => class extends Base {

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = DestroyObjectActionCodeGenMixin;
