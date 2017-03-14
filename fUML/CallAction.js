const InvocationAction = require("./InvocationAction");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/CallAction");



class CallAction extends codeGenMixin(InvocationAction) {

	constructor() {

		super();

		/// <summary>
		/// If true, the call is synchronous and the caller waits for completion of the
		/// invoked behavior.
		/// 
		/// If false, the call is asynchronous and the caller proceeds immediately and does
		/// not expect a return values.
		/// </summary>
		this.isSynchronous = true;
		/**
		 * A list of output pins where the results of performing the invocation are placed.
		 */
		this.result=null;	

	}

}//end CallAction

 module.exports = CallAction;
