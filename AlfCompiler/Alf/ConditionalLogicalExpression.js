const base = require("./BinaryExpression");
const mappingMixin = require("../MappingMixins/ConditionalLogicalExpression");


/// <summary>
/// A binary expression with a conditional logical expression, for which the
/// evaluation of the second operand expression is conditioned on the result of
/// evaluating the first operand expression.
/// </summary>
class ConditionalLogicalExpression extends mappingMixin(base.BinaryExpression) {

	constructor() {

		super();

	

	}

	/// <summary>
	/// If a name has the same assigned source after the second operand expression as
	/// before it, then that is its assigned source after the conditional logical
	/// expression. If a name is unassigned before the second operand expression, then
	/// it is considered unassigned after the conditional logical expression, even if
	/// it has an assigned source after the second operand expression. Otherwise its
	/// assigned source after the conditional logical expression is the conditional
	/// logical expression itself.
	/// </summary>
	updateAssignments() {

	}

	/// <summary>
	/// The assignments before the first operand expression of a conditional logical
	/// expression are the same as those before the conditional logical expression. The
	/// assignments before the second operand expression are the same as those after
	/// the first operand expression.
	/// </summary>
	validateAssignments() {

	}

}//end ConditionalLogicalExpression

 module.exports = {
 	ConditionalLogicalExpression: ConditionalLogicalExpression
 }