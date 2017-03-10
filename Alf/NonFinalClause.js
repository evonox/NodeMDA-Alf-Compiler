const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/NonFinalClause");


/// <summary>
/// A clause of an if statement with a conditional expression and a sequence of
/// statements that may be executed if the condition is true.
/// </summary>
class NonFinalClause extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/**
		 * The sequence of statements that may be executed if the condition evaluates to
		 * true.
		 */
		this.body=null;
		/**
		 * The expression that is evaluated to determine whether the clause body may be
		 * executed.
		 */
		this.condition=null;	

	}

	/// <summary>
	/// The assignments after a non-final clause are the assignments after the block of
	/// the clause.
	/// </summary>
	assignmentsAfter() {

	}

	/// <summary>
	/// The assignments before a non-final clause are the assignments before the
	/// condition of the clause.
	/// </summary>
	assignmentsBefore() {

	}

}//end NonFinalClause

 module.exports = {
 	NonFinalClause: NonFinalClause
 }