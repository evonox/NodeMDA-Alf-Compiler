
var CallBehaviorActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "CallBehaviorAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = CallBehaviorActionCodeGenMixin;
