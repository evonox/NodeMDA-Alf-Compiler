
var StructuralFeatureCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "StructuralFeature";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = StructuralFeatureCodeGenMixin;
