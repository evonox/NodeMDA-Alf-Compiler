
var CallConcurrencyKindCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "CallConcurrencyKind";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = CallConcurrencyKindCodeGenMixin;
