
var WriteStructuralFeatureActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "WriteStructuralFeatureAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = WriteStructuralFeatureActionCodeGenMixin;
