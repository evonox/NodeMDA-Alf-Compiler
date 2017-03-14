const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Action");



class Action extends ExecutableNode {

	constructor() {

		super();

		this.isLocallyReentrant = null;
		this.input=null;
		/**
		 * The classifier that owns the behavior of which this action is a part.
		 */
		this.context=null;
		/**
		 * The ordered set of output pins connected to the Action. The action places its
		 * results onto pins in this set.
		 */
		this.output=null;	

	}

}//end Action

 module.exports = Action;
