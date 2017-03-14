
var EnumerationCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Enumeration";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = EnumerationCodeGenMixin;
