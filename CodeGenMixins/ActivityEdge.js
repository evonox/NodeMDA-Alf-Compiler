
var ActivityEdgeCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "ActivityEdge";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = ActivityEdgeCodeGenMixin;
