const base = require("./Element");



class Clause extends base.Element {

	constructor() {

		super();

		/**
		 * An output pin within the test fragment the value of which is examined after
		 * execution of the test to determine whether the body should be executed.
		 */
		this.decider=null;
		/**
		 * A nested activity fragment that is executed if the test evaluates to true and
		 * the clause is chosen over any concurrent clauses that also evaluate to true.
		 */
		this.body=null;
		/**
		 * A list of output pins within the body fragment whose values are moved to the
		 * result pins of the containing conditional node after execution of the clause
		 * body.
		 */
		this.bodyOutput=null;
		/**
		 * A set of clauses whose tests must all evaluate false before the current clause
		 * can be tested.
		 */
		this.predecessorClause=null;
		/**
		 * A set of clauses which may not be tested unless the current clause tests false.
		 */
		this.successorClause=null;
		/**
		 * A nested activity fragment with a designated output pin that specifies the
		 * result of the test.
		 */
		this.test=null;	

	}

}//end Clause

 module.exports = {
 	Clause: Clause
 }