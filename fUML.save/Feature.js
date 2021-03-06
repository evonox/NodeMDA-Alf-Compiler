const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Feature");



class Feature extends RedefinableElement {

	constructor() {

		super();

		/// <summary>
		/// Specifies whether this feature characterizes individual instances classified by
		/// the classifier (false) or the classifier itself (true).
		/// </summary>
		this.isStatic = null;
		/**
		 * Redefines the corresponding association in Abstractions.
		 * The Classifiers that have this Feature as a feature.
		 */
		this.featuringClassifier=null;	

	}

}//end Feature

 module.exports = Feature;
