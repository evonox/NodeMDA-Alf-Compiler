
var CallOperationActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "CallOperationAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = CallOperationActionCodeGenMixin;
