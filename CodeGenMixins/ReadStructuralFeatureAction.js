
var ReadStructuralFeatureActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ReadStructuralFeatureAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ReadStructuralFeatureActionCodeGenMixin;
