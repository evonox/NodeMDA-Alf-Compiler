
var ReadExtentActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ReadExtentAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ReadExtentActionCodeGenMixin;
