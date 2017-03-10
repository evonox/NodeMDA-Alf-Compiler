const base = require("./ClassifierDefinition");
const mappingMixin = require("../MappingMixins/ClassifierTemplateParameter");


/// <summary>
/// The definition of a classifier template parameter, which acts as a classifier
/// within the definition of the template.
/// </summary>
class ClassifierTemplateParameter extends mappingMixin(base.ClassifierDefinition) {

	constructor() {

		super();

	

	}

	/// <summary>
	/// Annotations are not allowed on classifier template parameters.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

	/// <summary>
	/// Return true if the given member is a classifier template parameter.
	/// </summary>
	/// <param name="member">Returns true if the given member is distinguishable from
	/// this member. By default, this means that the names of the members are different.
	/// However, in any case that the UML Superstructure considers two names to be
	/// distinguishable if they are different, an Alf implementation may instead impose
	/// the stronger requirement that the names not be conflicting.</param>
	isSameKindAs(member) {

	}

	/// <summary>
	/// Returns false. (Classifier template parameters cannot be stubs.)
	/// </summary>
	/// <param name="unit"></param>
	matchForStub(unit) {

	}

}//end ClassifierTemplateParameter

 module.exports = {
 	ClassifierTemplateParameter: ClassifierTemplateParameter
 }