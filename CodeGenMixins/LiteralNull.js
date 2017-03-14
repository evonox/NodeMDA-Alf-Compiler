
var LiteralNullCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "LiteralNull";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = LiteralNullCodeGenMixin;
