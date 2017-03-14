const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ReadStructuralFeatureAction");



class ReadStructuralFeatureAction extends StructuralFeatureAction {

	constructor() {

		super();

		/**
		 * Gives the output pin on which the result is put.
		 */
		this.result=null;	

	}

}//end ReadStructuralFeatureAction

 module.exports = ReadStructuralFeatureAction;
