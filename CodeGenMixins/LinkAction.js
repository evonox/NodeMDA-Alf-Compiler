
var LinkActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "LinkAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = LinkActionCodeGenMixin;
