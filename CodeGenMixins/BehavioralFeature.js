
var BehavioralFeatureCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "BehavioralFeature";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        json.isAbstract = this.isAbstract;

        return json;
    }
}

module.exports = BehavioralFeatureCodeGenMixin;
