
var MessageEventCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "MessageEvent";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = MessageEventCodeGenMixin;
