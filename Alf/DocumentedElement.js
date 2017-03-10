const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/DocumentedElement");


/// <summary>
/// A syntax element that has documentation comments associated with it.
/// </summary>
class DocumentedElement extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/// <summary>
		/// The documentation text to be associated with a syntax element. Each string is
		/// intended to be mapped to the body of a comment element in the target UML model.
		/// 
		/// </summary>
		this.documentation = new Array();	

	}

}//end DocumentedElement

 module.exports = {
 	DocumentedElement: DocumentedElement
 }