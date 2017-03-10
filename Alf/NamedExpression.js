const base = require("./SyntaxElement");


/// <summary>
/// A pairing of a parameter name and an argument expression in a tuple.
/// </summary>
class NamedExpression extends base.SyntaxElement {

	constructor() {

		super();

		/// <summary>
		/// Whether the argument expression requires bit string conversion.
		/// </summary>
		this.isBitStringConversion = null;
		/// <summary>
		/// Whether the argument expression requires collection conversion.
		/// </summary>
		this.isCollectionConversion = null;
		/// <summary>
		/// The parameter name.
		/// </summary>
		this.name = null;
		/**
		 * The argument expression.
		 */
		this.expression=null;
		/**
		 * An expression whose value gives an index into an ordered parameter. (This is
		 * only used in link operation expressions.)
		 */
		this.index=null;	

	}

}//end NamedExpression

 module.exports = {
 	NamedExpression: NamedExpression
 }