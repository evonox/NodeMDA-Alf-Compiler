
var SendSignalActionCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "SendSignalAction";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = SendSignalActionCodeGenMixin;
