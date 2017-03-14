
var LiteralUnlimitedNaturalCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "LiteralUnlimitedNatural";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = LiteralUnlimitedNaturalCodeGenMixin;
