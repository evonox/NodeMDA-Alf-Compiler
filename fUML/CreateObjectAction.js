const Action = require("./Action");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/CreateObjectAction");



class CreateObjectAction extends codeGenMixin(Action) {

	constructor() {

		super();

		/**
		 * Classifier to be instantiated.
		 */
		this.classifier=null;
		/**
		 * Gives the output pin on which the result is put.
		 */
		this.result=null;	

	}

}//end CreateObjectAction

 module.exports = CreateObjectAction;
