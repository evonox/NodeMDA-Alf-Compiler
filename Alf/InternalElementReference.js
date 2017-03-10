const base = require("./ElementReference");
const mappingMixin = require("../MappingMixins/InternalElementReference");


/// <summary>
/// A direct reference to a UML model element.
/// </summary>
class InternalElementReference extends mappingMixin(base.ElementReference) {

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