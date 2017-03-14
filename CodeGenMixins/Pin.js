
var PinCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Pin";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = PinCodeGenMixin;
