
var LiteralStringCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "LiteralString";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = LiteralStringCodeGenMixin;
