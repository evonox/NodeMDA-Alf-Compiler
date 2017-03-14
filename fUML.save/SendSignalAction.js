const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/SendSignalAction");



class SendSignalAction extends InvocationAction {

	constructor() {

		super();

		/**
		 * The target object to which the signal is sent.
		 */
		this.target=null;
		/**
		 * The type of signal transmitted to the target object.
		 */
		this.signal=null;	

	}

}//end SendSignalAction

 module.exports = SendSignalAction;
