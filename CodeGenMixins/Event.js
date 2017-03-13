
const fUML = require("../fUML/fUML");

var EventCodeGenMixin = (Base) => class extends Base {

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = EventCodeGenMixin;
