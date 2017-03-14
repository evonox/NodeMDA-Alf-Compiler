
var ReceptionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Reception";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ReceptionCodeGenMixin;
