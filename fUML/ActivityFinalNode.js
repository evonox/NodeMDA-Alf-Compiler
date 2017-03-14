const FinalNode = require("./FinalNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ActivityFinalNode");



class ActivityFinalNode extends codeGenMixin(FinalNode) {

	constructor() {

		super();

	

	}

}//end ActivityFinalNode

 module.exports = ActivityFinalNode;
