
var LinkEndDestructionDataCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "LinkEndDestructionData";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = LinkEndDestructionDataCodeGenMixin;
