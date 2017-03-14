const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/WriteStructuralFeatureAction");



class WriteStructuralFeatureAction extends StructuralFeatureAction {

	constructor() {

		super();

		/**
		 * Value to be added or removed from the structural feature.
		 */
		this.value=null;
		this.result=null;	

	}

}//end WriteStructuralFeatureAction

 module.exports = WriteStructuralFeatureAction;
