const ActivityNode = require("./ActivityNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ExecutableNode");



class ExecutableNode extends codeGenMixin(ActivityNode) {

	constructor() {

		super();

		this.loopNode=null;
		this.clause=null;	

	}

}//end ExecutableNode

 module.exports = ExecutableNode;
