const base = require("./TypedElementDefinition");


/// <summary>
/// A typed element definition for the formal parameter of an activity or operation.
/// 
/// </summary>
class FormalParameter extends base.TypedElementDefinition {

	constructor() {

		super();

		/// <summary>
		/// An indication of the direction of the parameter being defined.
		/// </summary>
		this.direction = null;	

	}

	/// <summary>
	/// Returns true if the annotation is for a stereotype that has a metaclass
	/// consistent with Parameter.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

	/// <summary>
	/// Return true if the given member is a FormalParameter.
	/// </summary>
	/// <param name="member">Returns true if the given member is distinguishable from
	/// this member. By default, this means that the names of the members are different.
	/// However, in any case that the UML Superstructure considers two names to be
	/// distinguishable if they are different, an Alf implementation may instead impose
	/// the stronger requirement that the names not be conflicting.</param>
	isSameKindAs(member) {

	}

}//end FormalParameter

 module.exports = {
 	FormalParameter: FormalParameter
 }