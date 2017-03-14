
var ElementCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Element";
    }

    genJson() {
        let json = {};
        json.type = "";

        

        return json;
    }
}

module.exports = ElementCodeGenMixin;
