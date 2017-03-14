
var ReadSelfActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ReadSelfAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ReadSelfActionCodeGenMixin;
