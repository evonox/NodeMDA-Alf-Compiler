const base = require("./Member");


class ImportedMember extends base.Member {

	constructor() {

		super();

		this.referent=null;	

	}

	/// <summary>
	/// Returns false. (Imported members do not have annotations.)
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

	/// <summary>
	/// If the given member is not an imported member, then return the result of
	/// checking whether the given member is the same kind as this member. Else, if the
	/// element of the referent for this member is an Alf member, then return the
	/// result of checking whether that element is the same kind as the given member.
	/// Else, if the element of the referent for the given member is an Alf member,
	/// then return the result of checking whether that element is the same kind as
	/// this member. Else, the referents for both this and the given member are UML
	/// elements, so return the result of checking their distinguishability according
	/// to the rules of the UML superstructure.
	/// </summary>
	/// <param name="member">Returns true if the given member is distinguishable from
	/// this member. By default, this means that the names of the members are different.
	/// However, in any case that the UML Superstructure considers two names to be
	/// distinguishable if they are different, an Alf implementation may instead impose
	/// the stronger requirement that the names not be conflicting.</param>
	isSameKindAs(member) {

	}

}//end ImportedMember

 module.exports = {
 	ImportedMember: ImportedMember
 }