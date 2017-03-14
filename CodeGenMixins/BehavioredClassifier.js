
var BehavioredClassifierCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "BehavioredClassifier";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = BehavioredClassifierCodeGenMixin;
