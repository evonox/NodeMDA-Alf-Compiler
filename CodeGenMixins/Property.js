
var PropertyCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Property";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "Attribute";

        // Name and multiplicity are resolved in parent classes
        
        // TODO: Resolve and map type for strongly-typed languages
                

        return json;
    }
}

module.exports = PropertyCodeGenMixin;
