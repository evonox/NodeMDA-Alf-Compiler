
var ParameterCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Parameter";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "Parameter";

        json.name = this.name;
        json.direction = this.direction;        

        return json;
    }
}

module.exports = ParameterCodeGenMixin;
