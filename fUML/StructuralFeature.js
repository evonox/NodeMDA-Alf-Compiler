const MultiplicityElement = require("./MultiplicityElement");
const TypedElement = require("./TypedElement");
const Feature = require("./Feature");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/StructuralFeature");



class StructuralFeature extends codeGenMixin(mixin(MultiplicityElement, mixin(TypedElement, Feature))) {

	constructor() {

		super();

		/// <summary>
		/// States whether the feature's value may be modified by a client.
		/// </summary>
		this.isReadOnly = null;
		this.structuralFeatureAction=null;	

	}

}//end StructuralFeature

 module.exports = StructuralFeature;
