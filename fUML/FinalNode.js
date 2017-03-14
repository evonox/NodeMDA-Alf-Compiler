const ControlNode = require("./ControlNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/FinalNode");



class FinalNode extends codeGenMixin(ControlNode) {

	constructor() {

		super();

	

	}

}//end FinalNode

 module.exports = FinalNode;
