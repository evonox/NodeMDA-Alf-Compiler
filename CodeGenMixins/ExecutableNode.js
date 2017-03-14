
var ExecutableNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ExecutableNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ExecutableNodeCodeGenMixin;
