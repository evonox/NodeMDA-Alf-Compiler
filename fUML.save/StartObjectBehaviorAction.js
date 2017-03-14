const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/StartObjectBehaviorAction");



class StartObjectBehaviorAction extends CallAction {

	constructor() {

		super();

		this.object=null;	

	}

}//end StartObjectBehaviorAction

 module.exports = StartObjectBehaviorAction;
