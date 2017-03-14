
var ClauseCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Clause";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ClauseCodeGenMixin;
