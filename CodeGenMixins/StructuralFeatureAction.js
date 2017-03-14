
var StructuralFeatureActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "StructuralFeatureAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = StructuralFeatureActionCodeGenMixin;
