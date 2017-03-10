const base = require("./LiteralExpression");


/// <summary>
/// An expression that comprises a natural literal.
/// </summary>
class NaturalLiteralExpression extends base.LiteralExpression {

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