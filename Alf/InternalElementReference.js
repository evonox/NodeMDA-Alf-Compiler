const base = require("./ElementReference");


/// <summary>
/// A direct reference to a UML model element.
/// </summary>
class InternalElementReference extends base.ElementReference {

	constructor() {

		super();

		/**
		 * The Alf syntax element that represents the referenced model element.
		 */
		this.element=null;	

	}

}//end InternalElementReference

 module.exports = {
 	InternalElementReference: InternalElementReference
 }