const base = require("./Statement");


/// <summary>
/// A statement used to accept the receipt of instances of one or more signals.
/// </summary>
class AcceptStatement extends base.Statement {

	constructor() {

		super();

		/// <summary>
		/// Whether the accept statement is simple or not.
		/// </summary>
		this.isSimple = null;
		/**
		 * One or more blocks for accepting alternate groups of signals.
		 */
		this.acceptBlock=null;
		/**
		 * The behavior containing the accept statement.
		 */
		this.behavior=null;	

	}

}//end AcceptStatement

 module.exports = {
 	AcceptStatement: AcceptStatement
 }