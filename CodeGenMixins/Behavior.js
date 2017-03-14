
var BehaviorCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Behavior";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = BehaviorCodeGenMixin;
