const base = require("./BinaryExpression");


class ShiftExpression extends base.BinaryExpression {

	constructor() {

		super();

		/// <summary>
		/// Whether the first operand expression requires BitString conversion.
		/// </summary>
		this.isBitStringConversion = null;	

	}

}//end ShiftExpression

 module.exports = {
 	ShiftExpression: ShiftExpression
 }