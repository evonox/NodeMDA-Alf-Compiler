
var SignalCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Signal";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = SignalCodeGenMixin;
