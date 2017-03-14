
var TestIdentityActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "TestIdentityAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = TestIdentityActionCodeGenMixin;
