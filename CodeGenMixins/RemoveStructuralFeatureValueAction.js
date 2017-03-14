
var RemoveStructuralFeatureValueActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "RemoveStructuralFeatureValueAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = RemoveStructuralFeatureValueActionCodeGenMixin;
