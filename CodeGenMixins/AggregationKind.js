
var AggregationKindCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "AggregationKind";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = AggregationKindCodeGenMixin;
