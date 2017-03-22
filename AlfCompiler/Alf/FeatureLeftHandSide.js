const base = require("./LeftHandSide");
const mappingMixin = require("../MappingMixins/FeatureLeftHandSide");


/// <summary>
/// A left-hand side that is a property reference.
/// </summary>
class FeatureLeftHandSide extends mappingMixin(base.LeftHandSide) {

	constructor() {

		super();

		/**
		 * The structural feature being assigned.
		 */
		this.feature=null;	

	}

}//end FeatureLeftHandSide

 module.exports = {
 	FeatureLeftHandSide: FeatureLeftHandSide
 }