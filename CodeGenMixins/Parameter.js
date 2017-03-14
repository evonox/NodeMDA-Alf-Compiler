
var ParameterCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Parameter";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ParameterCodeGenMixin;
