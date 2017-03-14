
var TypeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Type";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = TypeCodeGenMixin;
