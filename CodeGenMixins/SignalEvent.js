
var SignalEventCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "SignalEvent";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = SignalEventCodeGenMixin;
