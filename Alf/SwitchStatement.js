const base = require("./Statement");


/// <summary>
/// A statement that executes (at most) one of a set of statement sequences based
/// on matching a switch value to a set of test cases.
/// </summary>
class SwitchStatement extends base.Statement {

	constructor() {

		super();

		/// <summary>
		/// Whether at least one case in the switch statement is assured to match.
		/// </summary>
		this.isAssured = null;
		/// <summary>
		/// Whether at most one case in the if statement will ever to match.
		/// </summary>
		this.isDeterminate = null;
		/**
		 * The set of switch clauses whose cases are to be tested against the switch value.
		 */
		this.nonDefaultClause=null;
		/**
		 * A sequence of statements to be executed if no switch clause case matches the
		 * switch value.
		 */
		this.defaultClause=null;
		/**
		 * The expression to be evaluated to provide the switch value.
		 */
		this.expression=null;	

	}

	/// <summary>
	/// In addition to an @isolated annotation, a switch statement may have @assured
	/// and @determinate annotations. They may not have arguments.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

}//end SwitchStatement

 module.exports = {
 	SwitchStatement: SwitchStatement
 }