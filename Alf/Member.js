const base = require("./DocumentedElement");


/// <summary>
/// A model of the common properties of the definition of a member of a namespace
/// in Alf.
/// </summary>
class Member extends base.DocumentedElement {

	constructor() {

		super();

		/// <summary>
		/// Whether this member is external or not.
		/// </summary>
		this.isExternal = null;
		/// <summary>
		/// Whether this member is a feature of a classifier.
		/// </summary>
		this.isFeature = null;
		/// <summary>
		/// Whether this member is a primitive or not.
		/// </summary>
		this.isPrimitive = null;
		/// <summary>
		/// Whether this member definition is a stub for a subunit.
		/// </summary>
		this.isStub = null;
		/// <summary>
		/// The name of the member.
		/// </summary>
		this.name = null;
		/// <summary>
		/// An indication of the visibility of the member outside of its namespace.
		/// </summary>
		this.visibility = null;
		/**
		 * The subunit corresponding to the member, if the member is a stub.
		 */
		this.subunit=null;
		/**
		 * The stereotype annotations on this member definition.
		 */
		this.annotation=null;	

	}

	/// <summary>
	/// Returns true of the given stereotype annotation is allowed for this kind of
	/// element.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

	/// <summary>
	/// Returns true if this member is distinguishable from the given member. Two
	/// members are distinguishable if their names are different or the they are of
	/// different kinds (as determined by the isSameKindAs operation). However, in any
	/// case that the UML Superstructure considers two names to be distinguishable if
	/// they are different, an Alf implementation may instead impose the stronger
	/// requirement that the names not be conflicting.
	/// </summary>
	/// <param name="member">Returns true if the given member is distinguishable from
	/// this member. By default, this means that the names of the members are different.
	/// However, in any case that the UML Superstructure considers two names to be
	/// distinguishable if they are different, an Alf implementation may instead impose
	/// the stronger requirement that the names not be conflicting.</param>
	isDistinguishableFrom(member) {

	}

	/// <summary>
	/// Returns true if this member is of the same kind as the given member.
	/// </summary>
	/// <param name="member">Returns true if the given member is distinguishable from
	/// this member. By default, this means that the names of the members are different.
	/// However, in any case that the UML Superstructure considers two names to be
	/// distinguishable if they are different, an Alf implementation may instead impose
	/// the stronger requirement that the names not be conflicting.</param>
	isSameKindAs(member) {

	}

	/// <summary>
	/// Returns true of the given unit definition is a legal match for this member as a
	/// stub. By default, always returns false.
	/// </summary>
	/// <param name="unit"></param>
	matchForStub(unit) {

	}

}//end Member

 module.exports = {
 	Member: Member
 }