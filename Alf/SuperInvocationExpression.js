const base = require("./InvocationExpression");


/// <summary>
/// An invocation expression used to invoke an operation of a superclass.
/// </summary>
class SuperInvocationExpression extends base.InvocationExpression {

	constructor() {

		super();

		/**
		 * The name of the operation to be invoked, optionally qualified with the name of
		 * the appropriate superclass.
		 */
		this.target=null;	

	}

}//end SuperInvocationExpression

 module.exports = {
 	SuperInvocationExpression: SuperInvocationExpression
 }