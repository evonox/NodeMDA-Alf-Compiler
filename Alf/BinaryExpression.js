const base = require("./Expression");
const mappingMixin = require("../MappingMixins/BinaryExpression");


/// <summary>
/// An expression consisting of an operator acting on two operand expressions.
/// </summary>
class BinaryExpression extends mappingMixin(base.Expression) {

	constructor() {

		super();

		/// <summary>
		/// The symbol representing the operator.
		/// </summary>
		this.operator = null;
		/**
		 * The expression giving the second operand.
		 */
		this.operand2=null;
		/**
		 * The expression giving the first operand.
		 */
		this.operand1=null;	

	}

	/// <summary>
	/// By default, null arguments are not allowed for binary expressions. (This is
	/// overridden for equality expressions.)
	/// </summary>
	noNullArguments() {

	}

	/// <summary>
	/// The assignments after a binary expression include all the assignments before
	/// the expression that are not reassigned in either operand expression, plus the
	/// new assignments from each of the operand expressions.
	/// </summary>
	updateAssignments() {

	}

	/// <summary>
	/// In general the assignments before the operand expressions of a binary
	/// expression are the same as those before the binary expression and, if an
	/// assignment for a name is changed in one operand expression, then the assignment
	/// for that name may not change in the other operand expression. (This is
	/// overridden for conditional logical expressions.)
	/// </summary>
	validateAssignments() {

	}

}//end BinaryExpression

 module.exports = {
 	BinaryExpression: BinaryExpression
 }