
var PropertyCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Property";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = PropertyCodeGenMixin;
