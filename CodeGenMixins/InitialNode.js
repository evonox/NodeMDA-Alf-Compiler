
var InitialNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "InitialNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = InitialNodeCodeGenMixin;
