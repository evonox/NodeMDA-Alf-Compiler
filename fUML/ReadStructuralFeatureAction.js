const base = require("./StructuralFeatureAction");



class ReadStructuralFeatureAction extends base.StructuralFeatureAction {

	constructor() {

		super();

		/**
		 * Gives the output pin on which the result is put.
		 */
		this.result=null;	

	}

}//end ReadStructuralFeatureAction

 module.exports = {
 	ReadStructuralFeatureAction: ReadStructuralFeatureAction
 }