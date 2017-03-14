
var VisibilityKindCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "VisibilityKind";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = VisibilityKindCodeGenMixin;
