
var ActivityNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ActivityNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ActivityNodeCodeGenMixin;
