
var ActivityFinalNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ActivityFinalNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ActivityFinalNodeCodeGenMixin;
