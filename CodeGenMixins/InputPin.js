
var InputPinCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "InputPin";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = InputPinCodeGenMixin;
