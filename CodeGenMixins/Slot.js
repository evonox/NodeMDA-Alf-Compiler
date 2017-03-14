
var SlotCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Slot";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = SlotCodeGenMixin;
