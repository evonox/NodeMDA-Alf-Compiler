const base = require("./ObjectNode");



class ActivityParameterNode extends base.ObjectNode {

	constructor() {

		super();

		/**
		 * The parameter the object node will be accepting or providing values for.
		 */
		this.parameter=null;	

	}

}//end ActivityParameterNode

 module.exports = {
 	ActivityParameterNode: ActivityParameterNode
 }