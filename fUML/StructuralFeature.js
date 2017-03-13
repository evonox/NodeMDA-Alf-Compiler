const base = require("./MultiplicityElement, TypedElement, Feature");



class StructuralFeature extends base.MultiplicityElement, TypedElement, Feature {

	constructor() {

		super();

		/// <summary>
		/// States whether the feature's value may be modified by a client.
		/// </summary>
		this.isReadOnly = null;
		this.structuralFeatureAction=null;	

	}

}//end StructuralFeature

 module.exports = {
 	StructuralFeature: StructuralFeature
 }