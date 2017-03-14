const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ActivityNode");



class ActivityNode extends RedefinableElement {

	constructor() {

		super();

		/**
		 * Edges that have the node as target.
		 */
		this.incoming=null;
		/**
		 * Edges that have the node as source.
		 */
		this.outgoing=null;	

	}

}//end ActivityNode

 module.exports = ActivityNode;
