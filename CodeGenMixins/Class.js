
const fUML = require("../fUML/fUML");

var ClassCodeGenMixin = (Base) => class extends Base {

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "class";

        json.superClassName = this.superClass[0].name;
        json.superClassPath = this.superClass[0].qualifiedName;

        json.attributes = this.ownedAttribute.map((attribute) => {
            return attribute.genJson();
        });
        json.operations = this.ownedOperation.map((operation) => {
            return operation.genJson();
        });       

        return json;
    }
}

module.exports = ClassCodeGenMixin;
