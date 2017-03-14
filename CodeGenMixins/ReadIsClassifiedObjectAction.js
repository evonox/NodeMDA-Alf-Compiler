
var ReadIsClassifiedObjectActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ReadIsClassifiedObjectAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ReadIsClassifiedObjectActionCodeGenMixin;
