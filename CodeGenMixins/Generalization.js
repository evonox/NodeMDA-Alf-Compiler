
var GeneralizationCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Generalization";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = GeneralizationCodeGenMixin;
