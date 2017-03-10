const base = require("./ClassifierDefinition");


/// <summary>
/// The definition of an activity, with any formal parameters defined as owned
/// members.
/// </summary>
class ActivityDefinition extends base.ClassifierDefinition {

	constructor() {

		super();

		/**
		 * The sequence of statements that defines the behavior of the activity (empty for
		 * a stub).
		 */
		this.body=null;	

	}

	/// <summary>
	/// In addition to the annotations allowed for classifiers in general, an activity
	/// definition allows @primitive annotations and any stereotype whose metaclass is
	/// consistent with Activity.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

	/// <summary>
	/// Returns true if the given unit definition matches this activity definition
	/// considered as a classifier definition and the subunit is for an activity
	/// definition. In addition, the subunit definition must have formal parameters
	/// that match each of the formal parameters of the stub definition, in order. Two
	/// formal parameters match if they have the same direction, name, multiplicity
	/// bounds, ordering, uniqueness and type reference.
	/// </summary>
	/// <param name="unit"></param>
	matchForStub(unit) {

	}

}//end ActivityDefinition

 module.exports = {
 	ActivityDefinition: ActivityDefinition
 }