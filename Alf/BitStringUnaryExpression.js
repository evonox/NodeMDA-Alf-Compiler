const base = require("./UnaryExpression");


class BitStringUnaryExpression extends base.UnaryExpression {

	constructor() {

		super();

		/// <summary>
		/// Whether BitString conversion is required on the operand expression.
		/// </summary>
		this.isBitStringConversion = null;	

	}

}//end BitStringUnaryExpression

 module.exports = {
 	BitStringUnaryExpression: BitStringUnaryExpression
 }