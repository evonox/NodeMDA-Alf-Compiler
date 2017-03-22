const base = require("./ClassDefinition");
const mappingMixin = require("../MappingMixins/ActiveClassDefinition");


/// <summary>
/// The definition of an active class.
/// </summary>
class ActiveClassDefinition extends mappingMixin(base.ClassDefinition) {

	constructor() {

		super();

		/**
		 * The definition of an activity (which may be a stub) to act as the classifier
		 * behavior of the active class.
		 */
		this.classifierBehavior=null;	

	}

	/// <summary>
	/// Returns true if the given unit definition matches this active class definition
	/// considered as a class definition and the subunit is for an active class
	/// definition.
	/// </summary>
	/// <param name="unit"></param>
	matchForStub(unit) {

	}

}//end ActiveClassDefinition

 module.exports = {
 	ActiveClassDefinition: ActiveClassDefinition
 }