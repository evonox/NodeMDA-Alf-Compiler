const base = require("./ClassifierDefinition");


/// <summary>
/// The definition of a data type, whose members must all be properties.
/// </summary>
class DataTypeDefinition extends base.ClassifierDefinition {

	constructor() {

		super();

	

	}

	/// <summary>
	/// In addition to the annotations allowed for classifiers in general, a data type
	/// definition allows @primitive annotations plus any stereotype whose metaclass is
	/// consistent with DataType.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

	/// <summary>
	/// Return true if the given member is either a DataTypeDefinition or an imported
	/// member whose referent is a DataTypeDefinition or a DataType.
	/// </summary>
	/// <param name="member">Returns true if the given member is distinguishable from
	/// this member. By default, this means that the names of the members are different.
	/// However, in any case that the UML Superstructure considers two names to be
	/// distinguishable if they are different, an Alf implementation may instead impose
	/// the stronger requirement that the names not be conflicting.</param>
	isSameKindAs(member) {

	}

	/// <summary>
	/// Returns true if the given unit definition matches this data type definition
	/// considered as a classifier definition and the subunit is for a data type
	/// definition.
	/// </summary>
	/// <param name="unit"></param>
	matchForStub(unit) {

	}

}//end DataTypeDefinition

 module.exports = {
 	DataTypeDefinition: DataTypeDefinition
 }