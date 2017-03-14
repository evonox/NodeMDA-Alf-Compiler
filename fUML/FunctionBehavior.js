const OpaqueBehavior = require("./OpaqueBehavior");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/FunctionBehavior");



class FunctionBehavior extends codeGenMixin(OpaqueBehavior) {

	constructor() {

		super();

	

	}

}//end FunctionBehavior

 module.exports = FunctionBehavior;
