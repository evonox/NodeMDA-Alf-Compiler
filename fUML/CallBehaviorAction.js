const CallAction = require("./CallAction");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/CallBehaviorAction");



class CallBehaviorAction extends codeGenMixin(CallAction) {

	constructor() {

		super();

		/**
		 * The invoked behavior. It must be capable of accepting and returning control.
		 */
		this.behavior=null;	

	}

}//end CallBehaviorAction

 module.exports = CallBehaviorAction;
