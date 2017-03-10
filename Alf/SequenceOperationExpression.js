const base = require("./InvocationExpression");


/// <summary>
/// An expression used to invoke a behavior as if it was an operation on a target
/// sequence as a whole.
/// </summary>
class SequenceOperationExpression extends base.InvocationExpression {

	constructor() {

		super();

		/// <summary>
		/// Whether type primary expression requires BitString conversion.
		/// </summary>
		this.isBitStringConversion = null;
		/// <summary>
		/// Whether the primary expression requires collection conversion.
		/// </summary>
		this.isCollectionConversion = null;
		/**
		 * The effective left-hand side corresponding to the primary expression, if the
		 * sequence operation is “in place” (that is, has a first parameter with direction
		 * inout).
		 */
		this.leftHandSide=null;
		/**
		 * The qualified name of the behavior being invoked.
		 */
		this.operation=null;
		/**
		 * The expression or class name whose value is gives the sequence to be operated
		 * on.
		 */
		this.primary=null;	

	}

	/// <summary>
	/// Returns the list of parameter elements from the superclass operation, with the
	/// first parameter removed (since the argument for the first parameter is given by
	/// the primary expression of a sequence operation expression, not in its tuple).
	/// </summary>
	parameterElements() {

	}

	/// <summary>
	/// The assignments after a sequence operation expression include those made in the
	/// primary expression and those made in the tuple and, for an "in place" operation
	/// (one whose first parameter is inout), that made by the sequence operation
	/// expression itself.
	/// </summary>
	updateAssignments() {

	}

}//end SequenceOperationExpression

 module.exports = {
 	SequenceOperationExpression: SequenceOperationExpression
 }