const base = require("./SyntaxElement");


/// <summary>
/// A grouping of non-final conditional clauses to be tested concurrently.
/// </summary>
class ConcurrentClauses extends base.SyntaxElement {

	constructor() {

		super();

		/**
		 * The conditional clauses in the group.
		 */
		this.clause=null;	

	}

}//end ConcurrentClauses

 module.exports = {
 	ConcurrentClauses: ConcurrentClauses
 }