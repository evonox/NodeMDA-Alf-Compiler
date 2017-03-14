
var ControlNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ControlNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ControlNodeCodeGenMixin;
