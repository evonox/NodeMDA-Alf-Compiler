const base = require("./InvocationExpression");


/// <summary>
/// An invocation of a feature referenced on a sequence of instances.
/// </summary>
class FeatureInvocationExpression extends base.InvocationExpression {

	constructor() {

		super();

		/**
		 * A feature reference to the target feature to be invoked.
		 */
		this.target=null;	

	}

}//end FeatureInvocationExpression

 module.exports = {
 	FeatureInvocationExpression: FeatureInvocationExpression
 }