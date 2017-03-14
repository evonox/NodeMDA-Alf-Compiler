
var ValueSpecificationCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ValueSpecification";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ValueSpecificationCodeGenMixin;
