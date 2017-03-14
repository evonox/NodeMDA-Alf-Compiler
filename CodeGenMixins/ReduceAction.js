
var ReduceActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ReduceAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ReduceActionCodeGenMixin;
