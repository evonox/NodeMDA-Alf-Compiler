const base = require("./SyntaxElement");


/// <summary>
/// An annotation of a member definition indicating the application of a stereotype
/// (or one of a small number of special-case annotations).
/// </summary>
class StereotypeAnnotation extends base.SyntaxElement {

	constructor() {

		super();

		/**
		 * A set of references to model elements required for the stereotype being applied.
		 */
		this.names=null;
		/**
		 * The name of the stereotype being applied.
		 */
		this.stereotypeName=null;
		/**
		 * A set of tagged values for the applied stereotype.
		 */
		this.taggedValues=null;	

	}

}//end StereotypeAnnotation

 module.exports = {
 	StereotypeAnnotation: StereotypeAnnotation
 }