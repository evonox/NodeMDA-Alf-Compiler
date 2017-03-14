
var FunctionBehaviorCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "FunctionBehavior";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = FunctionBehaviorCodeGenMixin;
