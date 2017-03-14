
var ExpansionKindCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ExpansionKind";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ExpansionKindCodeGenMixin;
