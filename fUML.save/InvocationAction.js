const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/InvocationAction");



class InvocationAction extends Action {

	constructor() {

		super();

		this.argument=null;	

	}

}//end InvocationAction

 module.exports = InvocationAction;
