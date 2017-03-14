const ControlNode = require("./ControlNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ForkNode");



class ForkNode extends codeGenMixin(ControlNode) {

	constructor() {

		super();

	

	}

}//end ForkNode

 module.exports = ForkNode;
