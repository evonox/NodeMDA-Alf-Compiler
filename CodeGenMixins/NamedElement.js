
var NamedElementCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "NamedElement";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        json.name = this.name;
        json.visibility = this.visibility;        

        return json;
    }
}

module.exports = NamedElementCodeGenMixin;
