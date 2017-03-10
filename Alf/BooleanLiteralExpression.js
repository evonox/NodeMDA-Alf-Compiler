const base = require("./LiteralExpression");


/// <summary>
/// An expression that comprises a Boolean literal.
/// </summary>
class BooleanLiteralExpression extends base.LiteralExpression {

	constructor() {

		super();

		/// <summary>
		/// The textual image of the literal token for this expression.
		/// </summary>
		this.image = null;	

	}

}//end BooleanLiteralExpression

 module.exports = {
 	BooleanLiteralExpression: BooleanLiteralExpression
 }