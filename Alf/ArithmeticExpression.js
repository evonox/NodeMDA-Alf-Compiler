const base = require("./BinaryExpression");


/// <summary>
/// A binary expression with an arithmetic operator.
/// </summary>
class ArithmeticExpression extends base.BinaryExpression {

	constructor() {

		super();

		/// <summary>
		/// Whether this is a string concatenation expression.
		/// </summary>
		this.isConcatenation = null;	

	}

}//end ArithmeticExpression

 module.exports = {
 	ArithmeticExpression: ArithmeticExpression
 }