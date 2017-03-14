
var NamedElementCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "NamedElement";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = NamedElementCodeGenMixin;
