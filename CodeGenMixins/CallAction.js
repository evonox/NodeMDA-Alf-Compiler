
var CallActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "CallAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = CallActionCodeGenMixin;
