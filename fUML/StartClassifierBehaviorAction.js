const base = require("./Action");



class StartClassifierBehaviorAction extends base.Action {

	constructor() {

		super();

		/**
		 * Holds the object on which to start the owned behavior.
		 */
		this.object=null;	

	}

}//end StartClassifierBehaviorAction

 module.exports = {
 	StartClassifierBehaviorAction: StartClassifierBehaviorAction
 }