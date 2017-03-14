
var LiteralIntegerCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "LiteralInteger";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = LiteralIntegerCodeGenMixin;
