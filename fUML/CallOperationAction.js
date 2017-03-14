const CallAction = require("./CallAction");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/CallOperationAction");



class CallOperationAction extends codeGenMixin(CallAction) {

	constructor() {

		super();

		/**
		 * The target object to which the request is sent. The classifier of the target
		 * object is used to dynamically determine a behavior to invoke. This object
		 * constitutes the context of the execution of the operation.
		 */
		this.target=null;
		/**
		 * The operation to be invoked by the action execution.
		 */
		this.operation=null;	

	}

}//end CallOperationAction

 module.exports = CallOperationAction;
