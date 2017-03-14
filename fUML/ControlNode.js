const ActivityNode = require("./ActivityNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ControlNode");



class ControlNode extends codeGenMixin(ActivityNode) {

	constructor() {

		super();

	

	}

}//end ControlNode

 module.exports = ControlNode;
