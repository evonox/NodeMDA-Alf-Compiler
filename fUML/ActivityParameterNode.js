const ObjectNode = require("./ObjectNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ActivityParameterNode");



class ActivityParameterNode extends codeGenMixin(ObjectNode) {

	constructor() {

		super();

		/**
		 * The parameter the object node will be accepting or providing values for.
		 */
		this.parameter=null;	

	}

}//end ActivityParameterNode

 module.exports = ActivityParameterNode;
