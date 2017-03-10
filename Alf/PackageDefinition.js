const base = require("./NamespaceDefinition");


/// <summary>
/// The definition of a package, all of whose members must be packageable elements.
/// 
/// </summary>
class PackageDefinition extends base.NamespaceDefinition {

	constructor() {

		super();

	

	}

	/// <summary>
	/// In addition to the annotations allowed on any namespace definition, a package
	/// definition allows @apply annotations plus any stereotype whose metaclass is
	/// consistent with Package.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

	/// <summary>
	/// Return true if the given member is either a PackageDefinition or an imported
	/// member whose referent is a PackageDefinition or a Package.
	/// </summary>
	/// <param name="member">Returns true if the given member is distinguishable from
	/// this member. By default, this means that the names of the members are different.
	/// However, in any case that the UML Superstructure considers two names to be
	/// distinguishable if they are different, an Alf implementation may instead impose
	/// the stronger requirement that the names not be conflicting.</param>
	isSameKindAs(member) {

	}

	/// <summary>
	/// Returns true of the namespace definition associated with the given unit
	/// definition is a package definition.
	/// </summary>
	/// <param name="unit"></param>
	matchForStub(unit) {

	}

}//end PackageDefinition

 module.exports = {
 	PackageDefinition: PackageDefinition
 }