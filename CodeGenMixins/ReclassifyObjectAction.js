
const fUML = require("../fUML/fUML");

var ReclassifyObjectActionCodeGenMixin = (Base) => class extends Base {

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ReclassifyObjectActionCodeGenMixin;
