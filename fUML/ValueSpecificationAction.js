const Action = require("./Action");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ValueSpecificationAction");



class ValueSpecificationAction extends codeGenMixin(Action) {

	constructor() {

		super();

		/**
		 * Gives the output pin on which the result is put.
		 */
		this.result=null;
		/**
		 * Value specification to be evaluated.
		 */
		this.value=null;	

	}

}//end ValueSpecificationAction

 module.exports = ValueSpecificationAction;
