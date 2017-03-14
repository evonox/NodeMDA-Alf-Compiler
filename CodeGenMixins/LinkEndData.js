
var LinkEndDataCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "LinkEndData";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = LinkEndDataCodeGenMixin;
