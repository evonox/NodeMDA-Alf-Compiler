
var FinalNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "FinalNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = FinalNodeCodeGenMixin;
