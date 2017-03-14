const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/BehavioredClassifier");



class BehavioredClassifier extends Classifier {

	constructor() {

		super();

		/**
		 * A behavior specification that specifies the behavior of the classifier itself.
		 */
		this.classifierBehavior=null;
		/**
		 * References behavior specifications owned by a classifier.
		 */
		this.ownedBehavior=null;	

	}

}//end BehavioredClassifier

 module.exports = BehavioredClassifier;
