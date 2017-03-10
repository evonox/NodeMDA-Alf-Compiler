const base = require("./BinaryExpression");
const mappingMixin = require("../MappingMixins/ShiftExpression");


class ShiftExpression extends mappingMixin(base.BinaryExpression) {

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