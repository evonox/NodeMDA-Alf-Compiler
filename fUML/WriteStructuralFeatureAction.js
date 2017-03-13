const base = require("./StructuralFeatureAction");



class WriteStructuralFeatureAction extends base.StructuralFeatureAction {

	constructor() {

		super();

		/**
		 * Value to be added or removed from the structural feature.
		 */
		this.value=null;
		this.result=null;	

	}

}//end WriteStructuralFeatureAction

 module.exports = {
 	WriteStructuralFeatureAction: WriteStructuralFeatureAction
 }