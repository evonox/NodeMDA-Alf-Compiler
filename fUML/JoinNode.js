const ControlNode = require("./ControlNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/JoinNode");



class JoinNode extends codeGenMixin(ControlNode) {

	constructor() {

		super();

	

	}

}//end JoinNode

 module.exports = JoinNode;
