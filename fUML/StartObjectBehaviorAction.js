const base = require("./CallAction");



class StartObjectBehaviorAction extends base.CallAction {

	constructor() {

		super();

		this.object=null;	

	}

}//end StartObjectBehaviorAction

 module.exports = {
 	StartObjectBehaviorAction: StartObjectBehaviorAction
 }