const base = require("./WriteStructuralFeatureAction");



class RemoveStructuralFeatureValueAction extends base.WriteStructuralFeatureAction {

	constructor() {

		super();

		/// <summary>
		/// Specifies whether to remove duplicates of the value in nonunique structural
		/// features.
		/// </summary>
		this.isRemoveDuplicates = null;
		/**
		 * Specifies the position of an existing value to remove in ordered nonunique
		 * structural features. The type of the pin is UnlimitedNatural, but the value
		 * cannot be zero or unlimited.
		 */
		this.removeAt=null;	

	}

}//end RemoveStructuralFeatureValueAction

 module.exports = {
 	RemoveStructuralFeatureValueAction: RemoveStructuralFeatureValueAction
 }