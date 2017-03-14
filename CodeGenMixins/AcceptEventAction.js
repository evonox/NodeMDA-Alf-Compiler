
var AcceptEventActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "AcceptEventAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = AcceptEventActionCodeGenMixin;
