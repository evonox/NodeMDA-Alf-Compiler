const ActivityEdge = require("./ActivityEdge");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ControlFlow");



class ControlFlow extends codeGenMixin(ActivityEdge) {

	constructor() {

		super();

	

	}

}//end ControlFlow

 module.exports = ControlFlow;
