
var PropertyCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Property";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "Attribute";
        json.name = this.name;
        json.isReadOnly = this.isReadOnly;
        json.visibility = this.visibility;
      
        // TODO: Resolve and map type for strongly-typed languages

        return json;
    }
}

module.exports = PropertyCodeGenMixin;
