
var ObjectNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ObjectNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ObjectNodeCodeGenMixin;
