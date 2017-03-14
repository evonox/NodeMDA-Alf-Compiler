
var OperationCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Operation";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = OperationCodeGenMixin;
