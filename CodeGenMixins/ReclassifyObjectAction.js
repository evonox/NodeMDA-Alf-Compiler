
var ReclassifyObjectActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ReclassifyObjectAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ReclassifyObjectActionCodeGenMixin;
