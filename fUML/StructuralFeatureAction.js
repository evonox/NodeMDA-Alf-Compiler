const base = require("./Action");



class StructuralFeatureAction extends base.Action {

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

 module.exports = {
 	StructuralFeatureAction: StructuralFeatureAction
 }