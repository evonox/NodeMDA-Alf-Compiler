const base = require("./BinaryExpression");
const mappingMixin = require("../MappingMixins/LogicalExpression");


/// <summary>
/// A binary expression with a logical operator.
/// </summary>
class LogicalExpression extends mappingMixin(base.BinaryExpression) {

	constructor() {

		super();

		/// <summary>
		/// Whether the first operand expression requires BitString conversion.
		/// </summary>
		this.isBitStringConversion1 = null;
		/// <summary>
		/// Whether the second operand expression requires BitString conversion.
		/// </summary>
		this.isBitStringConversion2 = null;
		/// <summary>
		/// Whether this is a bit-wise logical operation on bit strings.
		/// </summary>
		this.isBitWise = null;	

	}

}//end LogicalExpression

 module.exports = {
 	LogicalExpression: LogicalExpression
 }