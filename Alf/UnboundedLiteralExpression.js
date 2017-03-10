const base = require("./LiteralExpression");
const mappingMixin = require("../MappingMixins/UnboundedLiteralExpression");


/// <summary>
/// An expression that comprises an unbounded value literal.
/// </summary>
class UnboundedLiteralExpression extends mappingMixin(base.LiteralExpression) {

	constructor() {

		super();

	

	}

}//end UnboundedLiteralExpression

 module.exports = {
 	UnboundedLiteralExpression: UnboundedLiteralExpression
 }