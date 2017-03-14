
var MultiplicityElementCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "MultiplicityElement";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = MultiplicityElementCodeGenMixin;
