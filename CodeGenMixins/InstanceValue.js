
var InstanceValueCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "InstanceValue";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = InstanceValueCodeGenMixin;
