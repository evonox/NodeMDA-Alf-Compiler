
var ParameterDirectionKindCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ParameterDirectionKind";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ParameterDirectionKindCodeGenMixin;
