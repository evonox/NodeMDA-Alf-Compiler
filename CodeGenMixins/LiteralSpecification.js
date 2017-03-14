
var LiteralSpecificationCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "LiteralSpecification";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = LiteralSpecificationCodeGenMixin;
