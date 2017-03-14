
var MultiplicityElementCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "MultiplicityElement";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        if(this.upper === "*" || parseInt(this.upper) > 1) {
            json.isArray = true;
        } else {
            json.isArray = false;
        }       

        return json;
    }
}

module.exports = MultiplicityElementCodeGenMixin;
