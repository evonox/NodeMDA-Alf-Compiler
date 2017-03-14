
var EnumerationLiteralCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "EnumerationLiteral";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = EnumerationLiteralCodeGenMixin;
