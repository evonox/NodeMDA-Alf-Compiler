const Action = require("./Action");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/StartClassifierBehaviorAction");



class StartClassifierBehaviorAction extends codeGenMixin(Action) {

	constructor() {

		super();

		/**
		 * Holds the object on which to start the owned behavior.
		 */
		this.object=null;	

	}

}//end StartClassifierBehaviorAction

 module.exports = StartClassifierBehaviorAction;
