const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/DecisionNode");



class DecisionNode extends ControlNode {

	constructor() {

		super();

		/**
		 * Provides input to guard specifications on edges outgoing from the decision node.
		 */
		this.decisionInput=null;
		this.decisionInputFlow=null;	

	}

}//end DecisionNode

 module.exports = DecisionNode;
