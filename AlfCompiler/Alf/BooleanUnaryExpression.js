const base = require("./UnaryExpression");
const mappingMixin = require("../MappingMixins/BooleanUnaryExpression");


/// <summary>
/// A unary expression with a Boolean operator.
/// </summary>
class BooleanUnaryExpression extends mappingMixin(base.UnaryExpression) {

	constructor() {

		super();

	

	}

}//end BooleanUnaryExpression

 module.exports = {
 	BooleanUnaryExpression: BooleanUnaryExpression
 }