const CallAction = require("./CallAction");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/StartObjectBehaviorAction");



class StartObjectBehaviorAction extends codeGenMixin(CallAction) {

	constructor() {

		super();

		this.object=null;	

	}

}//end StartObjectBehaviorAction

 module.exports = StartObjectBehaviorAction;
