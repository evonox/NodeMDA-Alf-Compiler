const base = require("./InvocationExpression");
const mappingMixin = require("../MappingMixins/BehaviorInvocationExpression");


/// <summary>
/// An invocation of a behavior referenced by name.
/// </summary>
class BehaviorInvocationExpression extends mappingMixin(base.InvocationExpression) {

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