const base = require("./InvocationExpression");


/// <summary>
/// An invocation of a behavior referenced by name.
/// </summary>
class BehaviorInvocationExpression extends base.InvocationExpression {

	constructor() {

		super();

		/**
		 * The qualified name of the behavior to be invoked.
		 */
		this.target=null;	

	}

}//end BehaviorInvocationExpression

 module.exports = {
 	BehaviorInvocationExpression: BehaviorInvocationExpression
 }