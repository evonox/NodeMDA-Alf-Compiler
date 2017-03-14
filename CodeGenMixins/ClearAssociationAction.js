
var ClearAssociationActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ClearAssociationAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ClearAssociationActionCodeGenMixin;
