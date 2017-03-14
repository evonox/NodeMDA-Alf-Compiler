
var TriggerCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Trigger";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = TriggerCodeGenMixin;
