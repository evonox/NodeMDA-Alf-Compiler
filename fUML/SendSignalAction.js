const base = require("./InvocationAction");



class SendSignalAction extends base.InvocationAction {

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

 module.exports = {
 	SendSignalAction: SendSignalAction
 }