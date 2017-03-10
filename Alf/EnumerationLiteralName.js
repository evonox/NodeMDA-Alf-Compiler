const base = require("./Member");


/// <summary>
/// The definition of an enumeration literal, as a member of an enumeration
/// definition.
/// </summary>
class EnumerationLiteralName extends base.Member {

	constructor() {

		super();

	

	}

	/// <summary>
	/// Returns false. (Enumeration literal name cannot have annotations.)
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

}//end EnumerationLiteralName

 module.exports = {
 	EnumerationLiteralName: EnumerationLiteralName
 }