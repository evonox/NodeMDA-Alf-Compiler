
var ValueSpecificationActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ValueSpecificationAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ValueSpecificationActionCodeGenMixin;
