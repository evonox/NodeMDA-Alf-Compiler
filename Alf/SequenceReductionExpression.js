const base = require("./Expression");


/// <summary>
/// An expression used to reduce a sequence of values effectively by inserting a
/// binary operation between the values.
/// </summary>
class SequenceReductionExpression extends base.Expression {

	constructor() {

		super();

		/// <summary>
		/// Whether this is an ordered reduction or not.
		/// </summary>
		this.isOrdered = null;
		/**
		 * A reference to the behavior to be used as the reducer.
		 */
		this.referent=null;
		/**
		 * The name of the behavior to be used as the reducer.
		 */
		this.behaviorName=null;
		/**
		 * The target class name or primary expression for the reduction.
		 */
		this.primary=null;	

	}

	/// <summary>
	/// The assignments after a sequence reduction expression are the same as after its
	/// primary expression.
	/// </summary>
	updateAssignments() {

	}

}//end SequenceReductionExpression

 module.exports = {
 	SequenceReductionExpression: SequenceReductionExpression
 }