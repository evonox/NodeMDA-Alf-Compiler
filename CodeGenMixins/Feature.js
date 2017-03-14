
var FeatureCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Feature";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        json.isStatic = this.isStatic;

        return json;
    }
}

module.exports = FeatureCodeGenMixin;
