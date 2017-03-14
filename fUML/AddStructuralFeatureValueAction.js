const WriteStructuralFeatureAction = require("./WriteStructuralFeatureAction");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/AddStructuralFeatureValueAction");



class AddStructuralFeatureValueAction extends codeGenMixin(WriteStructuralFeatureAction) {

	constructor() {

		super();

		/// <summary>
		/// Specifies whether existing values of the structural feature of the object
		/// should be removed before adding the new value.
		/// </summary>
		this.isReplaceAll = null;
		this.insertAt=null;	

	}

}//end AddStructuralFeatureValueAction

 module.exports = AddStructuralFeatureValueAction;
