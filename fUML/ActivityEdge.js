const RedefinableElement = require("./RedefinableElement");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ActivityEdge");



class ActivityEdge extends codeGenMixin(RedefinableElement) {

	constructor() {

		super();

		/**
		 * Node to which tokens are put when they traverse the edge.
		 */
		this.target=null;
		/**
		 * Node from which tokens are taken when they traverse the edge.
		 */
		this.source=null;
		/**
		 * Specification evaluated at runtime to determine if the edge can be traversed.
		 */
		this.guard=null;	

	}

}//end ActivityEdge

 module.exports = ActivityEdge;
