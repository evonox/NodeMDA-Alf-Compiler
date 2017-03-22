
const mappingMixin = require("../MappingMixins/ElementReference");


/// <summary>
/// A reference to a model element, either directly or via its Alf abstract syntax
/// representation. (NOTE: The definitions of all the helper operations of
/// ElementReference are specific to its subclasses.)
/// </summary>
class ElementReference extends mappingMixin(Object) {

	constructor() {

	

	}

}//end ElementReference

 module.exports = {
 	ElementReference: ElementReference
 }