
var InvocationActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "InvocationAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = InvocationActionCodeGenMixin;
