const ActivityEdge = require("./ActivityEdge");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ObjectFlow");



class ObjectFlow extends codeGenMixin(ActivityEdge) {

	constructor() {

		super();

		this.decisionNode=null;	

	}

}//end ObjectFlow

 module.exports = ObjectFlow;
