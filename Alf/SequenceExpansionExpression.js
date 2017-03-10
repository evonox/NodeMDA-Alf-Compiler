const base = require("./Expression");


/// <summary>
/// An expression used to carry out one of a predefined set of operations over each
/// of the elements in a sequence.
/// </summary>
class SequenceExpansionExpression extends base.Expression {

	constructor() {

		super();

		/// <summary>
		/// The name of the operation to be carried out.
		/// </summary>
		this.operation = null;
		/// <summary>
		/// The name of the expansion variable available as a local name within the
		/// argument expression.
		/// </summary>
		this.variable = null;
		/**
		 * The assigned source for the expansion variable within the argument expression.
		 * The source is actually the sequence expansion expression itself.
		 */
		this.variableSource=null;
		/**
		 * The class name or primary expression that evaluates to the sequence to be acted
		 * on.
		 */
		this.primary=null;
		/**
		 * The argument expression. The exact form required for this expression depends on
		 * which expansion operation is being carried out.
		 */
		this.argument=null;	

	}

	/// <summary>
	/// The assignments after a sequence expansion expression are the same as after its
	/// primary expression.
	/// </summary>
	updateAssignments() {

	}

}//end SequenceExpansionExpression

 module.exports = {
 	SequenceExpansionExpression: SequenceExpansionExpression
 }