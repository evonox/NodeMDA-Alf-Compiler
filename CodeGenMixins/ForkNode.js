
var ForkNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ForkNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ForkNodeCodeGenMixin;
