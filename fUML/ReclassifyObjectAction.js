const Action = require("./Action");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ReclassifyObjectAction");



class ReclassifyObjectAction extends codeGenMixin(Action) {

	constructor() {

		super();

		/// <summary>
		/// Specifies whether existing classifiers should be removed before adding the new
		/// classifiers.
		/// </summary>
		this.isReplaceAll = null;
		this.newClassifier=null;
		/**
		 * A set of classifiers to be removed from the classifiers of the object.
		 */
		this.oldClassifier=null;
		/**
		 * Holds the object to be reclassified.
		 */
		this.object=null;	

	}

}//end ReclassifyObjectAction

 module.exports = ReclassifyObjectAction;
