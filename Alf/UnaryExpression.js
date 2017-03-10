const base = require("./Expression");


/// <summary>
/// An expression consisting of an operator acting on a single operand expression.
/// </summary>
class UnaryExpression extends base.Expression {

	constructor() {

		super();

		/// <summary>
		/// The symbol representing the operator.
		/// </summary>
		this.operator = null;
		/**
		 * The expression giving the operand.
		 */
		this.operand=null;	

	}

	/// <summary>
	/// By default, the assignments after a unary expression are the same as those
	/// after its operand expression.
	/// </summary>
	updateAssignments() {

	}

}//end UnaryExpression

 module.exports = {
 	UnaryExpression: UnaryExpression
 }