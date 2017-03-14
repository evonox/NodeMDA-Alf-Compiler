
var OutputPinCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "OutputPin";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = OutputPinCodeGenMixin;
