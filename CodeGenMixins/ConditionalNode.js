
var ConditionalNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ConditionalNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ConditionalNodeCodeGenMixin;
