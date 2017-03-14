
var OpaqueBehaviorCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "OpaqueBehavior";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = OpaqueBehaviorCodeGenMixin;
