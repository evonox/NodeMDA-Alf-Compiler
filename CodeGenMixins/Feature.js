
var FeatureCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Feature";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = FeatureCodeGenMixin;
