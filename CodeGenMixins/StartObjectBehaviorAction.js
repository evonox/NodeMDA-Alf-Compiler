
var StartObjectBehaviorActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "StartObjectBehaviorAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = StartObjectBehaviorActionCodeGenMixin;
