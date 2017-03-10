const base = require("./ClassifierDefinition");


/// <summary>
/// The definition of an enumeration, whose members must all be enumeration literal
/// names.
/// </summary>
class EnumerationDefinition extends base.ClassifierDefinition {

	constructor() {

		super();

	

	}

	/// <summary>
	/// In addition to the annotations allowed for classifiers in general, an
	/// enumeration definition allows an annotation for any stereotype whose metaclass
	/// is consistent with Enumeration.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

	/// <summary>
	/// Return true if the given member is either an EnumerationDefinition or an
	/// imported member whose referent is an EnumerationDefinition or an Enumeration.
	/// </summary>
	/// <param name="member">Returns true if the given member is distinguishable from
	/// this member. By default, this means that the names of the members are different.
	/// However, in any case that the UML Superstructure considers two names to be
	/// distinguishable if they are different, an Alf implementation may instead impose
	/// the stronger requirement that the names not be conflicting.</param>
	isSameKindAs(member) {

	}

	/// <summary>
	/// Returns true if the given unit definition matches this enumeration definition
	/// considered as a classifier definition and the subunit is for an enumeration
	/// definition.
	/// </summary>
	/// <param name="unit"></param>
	matchForStub(unit) {

	}

}//end EnumerationDefinition

 module.exports = {
 	EnumerationDefinition: EnumerationDefinition
 }