const base = require("./ClassifierDefinition");
const mappingMixin = require("../MappingMixins/ClassDefinition");


/// <summary>
/// The definition of a class, whose members may be properties, operations, signals
/// or signal receptions.
/// </summary>
class ClassDefinition extends mappingMixin(base.ClassifierDefinition) {

	constructor() {

		super();

	

	}

	/// <summary>
	/// In addition to the annotations allowed for classifiers in general, a class
	/// definition allows an annotation for any stereotype whose metaclass is
	/// consistent with Class.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

	/// <summary>
	/// Return true if the given member is either a ClassDefinition or an imported
	/// member whose referent is a ClassDefinition or a Class.
	/// </summary>
	/// <param name="member">Returns true if the given member is distinguishable from
	/// this member. By default, this means that the names of the members are different.
	/// However, in any case that the UML Superstructure considers two names to be
	/// distinguishable if they are different, an Alf implementation may instead impose
	/// the stronger requirement that the names not be conflicting.</param>
	isSameKindAs(member) {

	}

	/// <summary>
	/// Returns true if the given unit definition matches this class definition
	/// considered as a classifier definition and the subunit is for a class definition.
	/// 
	/// </summary>
	/// <param name="unit"></param>
	matchForStub(unit) {

	}

}//end ClassDefinition

 module.exports = {
 	ClassDefinition: ClassDefinition
 }