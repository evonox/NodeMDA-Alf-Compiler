const ControlNode = require("./ControlNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/MergeNode");



class MergeNode extends codeGenMixin(ControlNode) {

	constructor() {

		super();

	

	}

}//end MergeNode

 module.exports = MergeNode;
