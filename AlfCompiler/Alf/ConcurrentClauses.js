const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/ConcurrentClauses");


/// <summary>
/// A grouping of non-final conditional clauses to be tested concurrently.
/// </summary>
class ConcurrentClauses extends mappingMixin(base.SyntaxElement) {

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