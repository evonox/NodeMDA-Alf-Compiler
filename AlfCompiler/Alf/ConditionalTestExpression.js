const base = require("./Expression");
const mappingMixin = require("../MappingMixins/ConditionalTestExpression");


/// <summary>
/// An expression that uses the value of one operand expression to condition the
/// evaluation of one of two other operand expressions.
/// </summary>
class ConditionalTestExpression extends mappingMixin(base.Expression) {

	constructor() {

		super();

		/**
		 * The third operand expression, to be evaluated if the condition is false.
		 */
		this.operand3=null;
		/**
		 * The second operand expression, to be evaluated if the condition is true.
		 */
		this.operand2=null;
		/**
		 * The first operand expression, which provides the condition to be tested.
		 */
		this.operand1=null;	

	}

	/// <summary>
	/// Returns the assignments after the first operand expression, plus assignments
	/// for any newly defined local names in the second and third operand expressions.
	/// Local names that exist after the first operand expression but are reassigned in
	/// the second or third operand expressions are adjusted to have the conditional-
	/// test expression as their assigned source. Local names that are newly defined in
	/// the second and third operand expressions have the conditional-text expression
	/// as their source and a type that is the effective common ancestor (if one
	/// exists) of the types from the assignments after each of the second and third
	/// operands.
	/// </summary>
	updateAssignments() {

	}

}//end ConditionalTestExpression

 module.exports = {
 	ConditionalTestExpression: ConditionalTestExpression
 }