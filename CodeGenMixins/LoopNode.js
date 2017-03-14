
var LoopNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "LoopNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = LoopNodeCodeGenMixin;
