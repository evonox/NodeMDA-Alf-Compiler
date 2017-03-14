
var ClearStructuralFeatureActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ClearStructuralFeatureAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ClearStructuralFeatureActionCodeGenMixin;
