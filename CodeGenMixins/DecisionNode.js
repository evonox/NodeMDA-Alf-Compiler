
var DecisionNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "DecisionNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = DecisionNodeCodeGenMixin;
