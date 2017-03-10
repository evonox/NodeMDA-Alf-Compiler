const base = require("./SyntaxElement");


/// <summary>
/// A clause in a switch statement with a set of cases and a sequence of statements
/// that may be executed if one of the cases matches the switch value.
/// </summary>
class SwitchClause extends base.SyntaxElement {

	constructor() {

		super();

		/**
		 * The sequence of statements that may be executed if one of the cases matches the
		 * switch value.
		 */
		this.block=null;
		/**
		 * The expressions to be evaluated to provide values to test against the switch
		 * value.
		 */
		this.case=null;	

	}

	/// <summary>
	/// The assignments after a switch clause are the assignments after the block of
	/// the switch clause.
	/// </summary>
	assignmentsAfter() {

	}

	/// <summary>
	/// The assignments before a switch clause are the assignments before any case
	/// expression of the clause.
	/// </summary>
	assignmentsBefore() {

	}

}//end SwitchClause

 module.exports = {
 	SwitchClause: SwitchClause
 }