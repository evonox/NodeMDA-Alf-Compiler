
var ObjectFlowCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ObjectFlow";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ObjectFlowCodeGenMixin;
