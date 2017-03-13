const base = require("./RedefinableElement");



class ActivityNode extends base.RedefinableElement {

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

 module.exports = {
 	ActivityNode: ActivityNode
 }