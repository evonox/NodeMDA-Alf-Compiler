const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/FeatureReference");


/// <summary>
/// A reference to a structural or behavioral feature of the type of its target
/// expression or a binary association end the opposite end of which is typed by
/// the type of its target expression.
/// </summary>
class FeatureReference extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/**
		 * The name of the feature.
		 */
		this.nameBinding=null;
		/**
		 * The features referenced by this feature reference.
		 */
		this.referent=null;
		/**
		 * The target expression.
		 */
		this.expression=null;	

	}

}//end FeatureReference

 module.exports = {
 	FeatureReference: FeatureReference
 }