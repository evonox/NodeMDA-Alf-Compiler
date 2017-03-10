const base = require("./Member");


/// <summary>
/// A model of the common properties of the definition of a namespace in Alf.
/// </summary>
class NamespaceDefinition extends base.Member {

	constructor() {

		super();

		/**
		 * The owned and imported members of a namespace definition.
		 */
		this.member=null;
		/**
		 * The definitions of owned members of the namespace.
		 */
		this.ownedMember=null;	

	}

	/// <summary>
	/// Returns true if the annotation is
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

}//end NamespaceDefinition

 module.exports = {
 	NamespaceDefinition: NamespaceDefinition
 }