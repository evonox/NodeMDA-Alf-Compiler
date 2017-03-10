const base = require("./Member");
const mappingMixin = require("../MappingMixins/ReceptionDefinition");


/// <summary>
/// The declaration of the ability of an active class to receive a signal.
/// </summary>
class ReceptionDefinition extends mappingMixin(base.Member) {

	constructor() {

		super();

		/**
		 * The name of the signal to be received.
		 */
		this.signalName=null;
		this.signal=null;	

	}

	/// <summary>
	/// Returns true if the annotation is for a stereotype that has a metaclass
	/// consistent with Reception.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

	/// <summary>
	/// Return true if the given member is either a ReceptionDefinition, a
	/// SignalReceptionDefinition or an imported member whose referent is a
	/// ReceptionDefinition, a SignalReceptionDefinition or a Reception.
	/// </summary>
	/// <param name="member">Returns true if the given member is distinguishable from
	/// this member. By default, this means that the names of the members are different.
	/// However, in any case that the UML Superstructure considers two names to be
	/// distinguishable if they are different, an Alf implementation may instead impose
	/// the stronger requirement that the names not be conflicting.</param>
	isSameKindAs(member) {

	}

}//end ReceptionDefinition

 module.exports = {
 	ReceptionDefinition: ReceptionDefinition
 }