
var LiteralBooleanCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "LiteralBoolean";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = LiteralBooleanCodeGenMixin;
