const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Classifier");



class Classifier extends Namespace, Type {

	constructor() {

		super();

		/// <summary>
		/// If true, the Classifier does not provide a complete declaration and can
		/// typically not be instantiated. An abstract classifier is intended to be used by
		/// other classifiers e.g. as the target of general metarelationships or
		/// generalization relationships.
		/// </summary>
		this.isAbstract = null;
		this.isFinalSpecialization = null;
		/**
		 * Specifies all elements inherited by this classifier from the general
		 * classifiers.
		 */
		this.inheritedMember=null;
		this.general=null;
		/**
		 * Specifies the Generalization relationships for this Classifier. These
		 * Generalizations navigaten to more general classifiers in the generalization
		 * hierarchy.
		 */
		this.generalization=null;
		/**
		 * Refers to all of the Properties that are direct (i.e. not inherited or import
		 * fUML.Syntax.d) attributes of the classifier.
		 */
		this.attribute=null;
		/**
		 * Redefines the corresponding association in Abstractions.  Note that there may
		 * be members of the Classifier that are of the type Feature but are not included
		 * in this association, e.g. inherited features.
		 * Specifies each feature defined in the classifier.
		 */
		this.feature=null;	

	}

}//end Classifier

 module.exports = Classifier;
