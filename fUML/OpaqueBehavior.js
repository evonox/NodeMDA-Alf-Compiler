const Behavior = require("./Behavior");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/OpaqueBehavior");



class OpaqueBehavior extends codeGenMixin(Behavior) {

	constructor() {

		super();

		this.body = new Array();
		this.language = new Array();	

	}

}//end OpaqueBehavior

 module.exports = OpaqueBehavior;
