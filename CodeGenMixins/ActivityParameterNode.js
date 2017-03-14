
var ActivityParameterNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ActivityParameterNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ActivityParameterNodeCodeGenMixin;
