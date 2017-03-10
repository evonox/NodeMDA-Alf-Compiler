const base = require("./LiteralExpression");
const mappingMixin = require("../MappingMixins/NaturalLiteralExpression");


/// <summary>
/// An expression that comprises a natural literal.
/// </summary>
class NaturalLiteralExpression extends mappingMixin(base.LiteralExpression) {

	constructor() {

		super();

		/// <summary>
		/// The textual image of the literal token for this expression.
		/// </summary>
		this.image = null;	

	}

}//end NaturalLiteralExpression

 module.exports = {
 	NaturalLiteralExpression: NaturalLiteralExpression
 }