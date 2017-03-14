
var ElementCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Element";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ElementCodeGenMixin;
