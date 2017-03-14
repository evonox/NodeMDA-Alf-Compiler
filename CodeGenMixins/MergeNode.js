
var MergeNodeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "MergeNode";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = MergeNodeCodeGenMixin;
