
var EventCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Event";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = EventCodeGenMixin;
