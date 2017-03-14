
var StartClassifierBehaviorActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "StartClassifierBehaviorAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = StartClassifierBehaviorActionCodeGenMixin;
