
var ExpansionRegionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ExpansionRegion";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ExpansionRegionCodeGenMixin;
