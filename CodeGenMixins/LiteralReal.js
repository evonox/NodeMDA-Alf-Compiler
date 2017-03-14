
var LiteralRealCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "LiteralReal";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = LiteralRealCodeGenMixin;
