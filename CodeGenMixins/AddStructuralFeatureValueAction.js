
var AddStructuralFeatureValueActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "AddStructuralFeatureValueAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = AddStructuralFeatureValueActionCodeGenMixin;
