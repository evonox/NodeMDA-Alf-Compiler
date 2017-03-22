const base = require("./UnaryExpression");
const mappingMixin = require("../MappingMixins/IsolationExpression");


/// <summary>
/// An expression used to evaluate its operand expression in isolation.
/// </summary>
class IsolationExpression extends mappingMixin(base.UnaryExpression) {

	constructor() {

		super();

	

	}

}//end IsolationExpression

 module.exports = {
 	IsolationExpression: IsolationExpression
 }