const base = require("./CallAction");



class CallBehaviorAction extends base.CallAction {

	constructor() {

		super();

		/**
		 * The invoked behavior. It must be capable of accepting and returning control.
		 */
		this.behavior=null;	

	}

}//end CallBehaviorAction

 module.exports = {
 	CallBehaviorAction: CallBehaviorAction
 }