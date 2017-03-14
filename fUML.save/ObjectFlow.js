const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ObjectFlow");



class ObjectFlow extends ActivityEdge {

	constructor() {

		super();

		this.decisionNode=null;	

	}

}//end ObjectFlow

 module.exports = ObjectFlow;
