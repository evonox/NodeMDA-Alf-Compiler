const base = require("./ElementReference");
const mappingMixin = require("../MappingMixins/ExternalElementReference");


/// <summary>
/// A direct reference to a UML model element.
/// </summary>
class ExternalElementReference extends mappingMixin(base.ElementReference) {

	constructor() {

		super();

	

	}

}//end ExternalElementReference

 module.exports = {
 	ExternalElementReference: ExternalElementReference
 }