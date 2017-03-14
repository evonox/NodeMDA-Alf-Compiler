const ControlNode = require("./ControlNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/InitialNode");



class InitialNode extends codeGenMixin(ControlNode) {

	constructor() {

		super();

	

	}

}//end InitialNode

 module.exports = InitialNode;
