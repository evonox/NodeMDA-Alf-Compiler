const base = require("./ControlNode");



class DecisionNode extends base.ControlNode {

	constructor() {

		super();

		/**
		 * Provides input to guard specifications on edges outgoing from the decision node.
		 */
		this.decisionInput=null;
		this.decisionInputFlow=null;	

	}

}//end DecisionNode

 module.exports = {
 	DecisionNode: DecisionNode
 }