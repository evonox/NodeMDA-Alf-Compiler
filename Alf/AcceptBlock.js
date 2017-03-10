const base = require("./SyntaxElement");


/// <summary>
/// A block of an accept statement that accepts one or more signals.
/// </summary>
class AcceptBlock extends base.SyntaxElement {

	constructor() {

		super();

		/// <summary>
		/// The local name to which an accepted signal instance will be assigned.
		/// </summary>
		this.name = null;
		/**
		 * A list of names of the signals accepted by this accept block.
		 */
		this.signalNames=null;
		/**
		 * The body of the accept block, executed if one of the named signals is received.
		 */
		this.block=null;
		/**
		 * The signals denoted by the signal names of the accept block.
		 */
		this.signal=null;	

	}

}//end AcceptBlock

 module.exports = {
 	AcceptBlock: AcceptBlock
 }