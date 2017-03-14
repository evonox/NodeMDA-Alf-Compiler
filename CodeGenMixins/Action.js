
var ActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Action";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ActionCodeGenMixin;
