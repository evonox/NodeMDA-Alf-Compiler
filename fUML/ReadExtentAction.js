const Action = require("./Action");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ReadExtentAction");



class ReadExtentAction extends codeGenMixin(Action) {

	constructor() {

		super();

		/**
		 * The runtime instances of the classifier.
		 */
		this.result=null;
		/**
		 * The classifier whose instances are to be retrieved.
		 */
		this.classifier=null;	

	}

}//end ReadExtentAction

 module.exports = ReadExtentAction;
