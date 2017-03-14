const ObjectNode = require("./ObjectNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ExpansionNode");



class ExpansionNode extends codeGenMixin(ObjectNode) {

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

 module.exports = ExpansionNode;
