const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ReadSelfAction");



class ReadSelfAction extends Action {

	constructor() {

		super();

		/**
		 * Gives the output pin on which the hosting object is placed.
		 */
		this.result=null;	

	}

}//end ReadSelfAction

 module.exports = ReadSelfAction;
