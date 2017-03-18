
var ClassCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Class";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "class";

        let namespace = this.qualifiedName.split("::");
        json.namespace = namespace.slice(0, namespace.length - 1);

        if(this.hasSuperclass()) {
            json.superClassName = this.superClass[0].name;
            json.superClassPath = this.superClass[0].qualifiedName;
        } else {
            json.superClassName = null;
            json.superClassPath = null;
        }
        
        json.attributes = this.ownedAttribute.map((attribute) => {
            return attribute.genJson();
        });
        json.operations = this.ownedOperation.map((operation) => {
            return operation.genJson();
        });       
      
        return json;
    }

    hasSuperclass() {
        return this.superClass.length !== undefined && this.superClass !== null
            && this.superClass instanceof Array && this.superClass.length > 0;
    }
}

module.exports = ClassCodeGenMixin;
