const base = require("./SyntaxElement");


/// <summary>
/// A model of the common properties derived for any Alf expression. NOTE: The
/// derivations for all properties of Expression except AssignmentsAfter are
/// specific to its various subclasses.
/// </summary>
class Expression extends base.SyntaxElement {

	constructor() {

		super();

		/// <summary>
		/// The statically determined lower bound of the multiplicity of this expression.
		/// </summary>
		this.lower = null;
		/// <summary>
		/// The statically determined upper bound of the multiplicity of this expression.
		/// </summary>
		this.upper = null;
		/**
		 * The assigned sources for local names available lexically after this expression.
		 * This includes not only any assignments made within the expression, but also any
		 * assignments that are unchanged from before the expression.
		 */
		this.assignmentAfter=null;
		/**
		 * A reference to the element that specifies the statically determined type for
		 * this expression (if any).
		 */
		this.type=null;
		/**
		 * The assigned sources for local names available lexically before this expression.
		 */
		this.assignmentBefore=null;	

	}

	/// <summary>
	/// Returns the assignments from before this expression updated for any assignments
	/// made in the expression. By default, this is the same set as the assignments
	/// before the expression. This operation is redefined only in subclasses of
	/// Expression for kinds of expressions that make assignments.
	/// </summary>
	updateAssignments() {

	}

}//end Expression

 module.exports = {
 	Expression: Expression
 }