const FinalNode = require("./FinalNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/FlowFinalNode");



class FlowFinalNode extends codeGenMixin(FinalNode) {

	constructor() {

		super();

	

	}

}//end FlowFinalNode

 module.exports = FlowFinalNode;
