
var CreateObjectActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "CreateObjectAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = CreateObjectActionCodeGenMixin;
