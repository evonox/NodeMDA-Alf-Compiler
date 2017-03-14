
var ActivityCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Activity";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ActivityCodeGenMixin;
