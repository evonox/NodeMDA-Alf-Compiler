const base = require("./WriteStructuralFeatureAction");



class AddStructuralFeatureValueAction extends base.WriteStructuralFeatureAction {

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

 module.exports = {
 	AddStructuralFeatureValueAction: AddStructuralFeatureValueAction
 }