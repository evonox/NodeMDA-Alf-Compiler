const base = require("./UnaryExpression");
const mappingMixin = require("../MappingMixins/NumericUnaryExpression");


/// <summary>
/// A unary expression with a numeric operator.
/// </summary>
class NumericUnaryExpression extends mappingMixin(base.UnaryExpression) {

	constructor() {

		super();

	

	}

}//end NumericUnaryExpression

 module.exports = {
 	NumericUnaryExpression: NumericUnaryExpression
 }