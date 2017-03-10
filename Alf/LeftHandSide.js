const base = require("./SyntaxElement");


/// <summary>
/// The left-hand side of an assignment expression. NOTE: The derivations for the
/// derived properties of LeftHandSide are specific to its various subclasses.
/// </summary>
class LeftHandSide extends base.SyntaxElement {

	constructor() {

		super();

		/// <summary>
		/// The statically determined lower bound of the multiplicity of this left-hand
		/// side.
		/// </summary>
		this.lower = null;
		/// <summary>
		/// A reference to the assignable element denoted by this left-hand side, if one
		/// exists (i.e., the left-hand side is not for the first assignment of a local
		/// name).
		/// </summary>
		this.referent = null;
		/// <summary>
		/// A reference to the element that specifies the statically determined type of
		/// this left-hand side (if any).
		/// </summary>
		this.type = null;
		/// <summary>
		/// The statically determined upper bound of the multiplicity of this left-hand
		/// side.
		/// </summary>
		this.upper = null;
		/**
		 * An optional expression that evaluates to an index into the values of an ordered
		 * sequence.
		 */
		this.index=null;
		/**
		 * The assignments after the left-hand side.
		 */
		this.assignmentAfter=null;
		this.assignmentBefore=null;	

	}

}//end LeftHandSide

 module.exports = {
 	LeftHandSide: LeftHandSide
 }