const base = require("./UnaryExpression");
const mappingMixin = require("../MappingMixins/BitStringUnaryExpression");


class BitStringUnaryExpression extends mappingMixin(base.UnaryExpression) {

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