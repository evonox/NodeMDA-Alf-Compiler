
var InstanceSpecificationCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "InstanceSpecification";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = InstanceSpecificationCodeGenMixin;
