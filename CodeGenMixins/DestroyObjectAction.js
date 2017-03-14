
var DestroyObjectActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "DestroyObjectAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = DestroyObjectActionCodeGenMixin;
