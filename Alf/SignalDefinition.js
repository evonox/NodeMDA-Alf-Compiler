const base = require("./ClassifierDefinition");


/// <summary>
/// The definition of a signal, whose members must all be properties.
/// </summary>
class SignalDefinition extends base.ClassifierDefinition {

	constructor() {

		super();

	

	}

	/// <summary>
	/// In addition to the annotations allowed for classifiers in general, a signal
	/// definition allows an annotation for any stereotype whose metaclass is
	/// consistent with Signal.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

	/// <summary>
	/// Return true if the given member is either a SignalDefinition or an imported
	/// member whose referent is a SignalDefinition or a Signal (where signal reception
	/// definitions are considered to be kinds of signal definitions).
	/// </summary>
	/// <param name="member">Returns true if the given member is distinguishable from
	/// this member. By default, this means that the names of the members are different.
	/// However, in any case that the UML Superstructure considers two names to be
	/// distinguishable if they are different, an Alf implementation may instead impose
	/// the stronger requirement that the names not be conflicting.</param>
	isSameKindAs(member) {

	}

	/// <summary>
	/// Returns true if the given unit definition matches this signal definition
	/// considered as a classifier definition and the subunit is for a signal
	/// definition.
	/// </summary>
	/// <param name="unit"></param>
	matchForStub(unit) {

	}

}//end SignalDefinition

 module.exports = {
 	SignalDefinition: SignalDefinition
 }