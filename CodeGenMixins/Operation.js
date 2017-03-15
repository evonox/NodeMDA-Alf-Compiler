
var OperationCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Operation";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "operation";

        // Common parameters
        json.parameters = this.ownedParameter
        .filter((parameter) => {
            return parameter.direction !== "return";
        })
        .map((parameter) => {
            return parameter.genJson();
        });  

        // Return parameters
        json.returnParameters = this.ownedParameter
        .filter((parameter) => {
            return parameter.direction === "return";
        })
        .map((parameter) => {
            return parameter.genJson();
        });          

        return json;
    }
}

module.exports = OperationCodeGenMixin;
