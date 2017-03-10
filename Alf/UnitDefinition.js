const base = require("./DocumentedElement");


/// <summary>
/// The definition of a namespace as an Alf unit.
/// </summary>
class UnitDefinition extends base.DocumentedElement {

	constructor() {

		super();

		/// <summary>
		/// Whether this unit definition is for a model library or not.
		/// </summary>
		this.isModelLibrary = null;
		/**
		 * The set of references to imported elements or packages.
		 */
		this.import=null;
		/**
		 * A declaration of the name of the namespace that contains this unit as a subunit.
		 */
		this.namespaceName=null;
		/**
		 * The definition of the unit as a namespace.
		 */
		this.definition=null;
		/**
		 * A reference to the namespace denoted by the declared namespace name for the
		 * unit, if any.
		 */
		this.namespace=null;	

	}

}//end UnitDefinition

 module.exports = {
 	UnitDefinition: UnitDefinition
 }