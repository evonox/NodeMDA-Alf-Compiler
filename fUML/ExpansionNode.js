const base = require("./ObjectNode");



class ExpansionNode extends base.ObjectNode {

	constructor() {

		super();

		/**
		 * The expansion region for which the node is an input.
		 */
		this.regionAsInput=null;
		/**
		 * The expansion region for which the node is an output.
		 */
		this.regionAsOutput=null;	

	}

}//end ExpansionNode

 module.exports = {
 	ExpansionNode: ExpansionNode
 }