const Action = require("./Action");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/StructuralFeatureAction");



class StructuralFeatureAction extends codeGenMixin(Action) {

	constructor() {

		super();

		/**
		 * Structural feature to be read.
		 */
		this.structuralFeature=null;
		/**
		 * Gives the input pin from which the object whose structural feature is to be
		 * read or written is obtained.
		 */
		this.object=null;	

	}

}//end StructuralFeatureAction

 module.exports = StructuralFeatureAction;
