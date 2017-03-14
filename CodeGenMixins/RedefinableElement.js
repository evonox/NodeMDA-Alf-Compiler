
var RedefinableElementCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "RedefinableElement";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = RedefinableElementCodeGenMixin;
