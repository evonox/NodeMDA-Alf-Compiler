const base = require("./NamespaceDefinition");
const mappingMixin = require("../MappingMixins/ClassifierDefinition");


/// <summary>
/// The definition of a classifier.
/// </summary>
class ClassifierDefinition extends mappingMixin(base.NamespaceDefinition) {

	constructor() {

		super();

		/// <summary>
		/// Whether the classifier is abstract or not.
		/// </summary>
		this.isAbstract = null;
		/**
		 * References to the classifiers to which the names in the specialization list
		 * resolve.
		 */
		this.specializationReferent=null;
		/**
		 * The names of classifiers specialized by the classifier being defined.
		 */
		this.specialization=null;	

	}

	/// <summary>
	/// The namespace definition associated with the given unit definition must be a
	/// classifier definition. The subunit classifier definition may be abstract if and
	/// only if the subunit classifier definition is abstract. The subunit classifier
	/// definition must have the same specialization referents as the stub classifier
	/// definition. (Note that it is the referents that must match, not the exact names
	/// or the ordering of those names in the specialization list.) The subunit
	/// classifier definition must also have a matching classifier template parameter
	/// for each classifier template parameter of the stub classifier definition. Two
	/// template parameters match if they have same names and the same specialization
	/// referents.
	/// </summary>
	/// <param name="unit"></param>
	matchForStub(unit) {

	}

}//end ClassifierDefinition

 module.exports = {
 	ClassifierDefinition: ClassifierDefinition
 }