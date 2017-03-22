const base = require("./BinaryExpression");
const mappingMixin = require("../MappingMixins/EqualityExpression");


/// <summary>
/// A binary expression that tests the equality of its operands.
/// </summary>
class EqualityExpression extends mappingMixin(base.BinaryExpression) {

	constructor() {

		super();

		/// <summary>
		/// Whether the test is for being not equal.
		/// </summary>
		this.isNegated = null;	

	}

	/// <summary>
	/// Returns false for an equality expression.
	/// </summary>
	noNullArguments() {

	}

}//end EqualityExpression

 module.exports = {
 	EqualityExpression: EqualityExpression
 }