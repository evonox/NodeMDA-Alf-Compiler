const base = require("./Statement");


/// <summary>
/// A conditional statement that executes (at most) one of a set of clauses based
/// on boolean conditions.
/// </summary>
class IfStatement extends base.Statement {

	constructor() {

		super();

		/// <summary>
		/// Whether at least one condition in the if statement is assured to evaluate to
		/// true.
		/// </summary>
		this.isAssured = null;
		/// <summary>
		/// Whether at most one condition in the if statement will ever to evaluate to true.
		/// 
		/// </summary>
		this.isDeterminate = null;
		/**
		 * A list of groupings of concurrent clauses that are to be checked sequentially
		 * for a successful condition.
		 */
		this.nonFinalClauses=null;
		/**
		 * A sequence of statements to be executed if no other clause has a successful
		 * condition.
		 */
		this.finalClause=null;	

	}

	/// <summary>
	/// In addition to an @isolated annotation, an if statement may have @assured and
	/// @determinate annotations. They may not have arguments.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

}//end IfStatement

 module.exports = {
 	IfStatement: IfStatement
 }