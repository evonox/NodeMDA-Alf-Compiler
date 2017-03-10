const base = require("./LiteralExpression");


/// <summary>
/// An expression that comprises a String literal.
/// </summary>
class StringLiteralExpression extends base.LiteralExpression {

	constructor() {

		super();

		/// <summary>
		/// The textual image of the literal token for this expression, with quote
		/// characters removed and escaped sequences resolved to the denoted special
		/// character.
		/// </summary>
		this.image = null;	

	}

}//end StringLiteralExpression

 module.exports = {
 	StringLiteralExpression: StringLiteralExpression
 }