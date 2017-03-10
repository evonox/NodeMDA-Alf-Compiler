const base = require("./Expression");
const mappingMixin = require("../MappingMixins/LiteralExpression");


/// <summary>
/// An expression that comprises a primitive literal.
/// </summary>
class LiteralExpression extends mappingMixin(base.Expression) {

	constructor() {

		super();

	

	}

}//end LiteralExpression

 module.exports = {
 	LiteralExpression: LiteralExpression
 }