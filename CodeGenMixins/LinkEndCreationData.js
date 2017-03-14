
var LinkEndCreationDataCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "LinkEndCreationData";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = LinkEndCreationDataCodeGenMixin;
