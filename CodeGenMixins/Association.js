
var AssociationCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Association";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = AssociationCodeGenMixin;
