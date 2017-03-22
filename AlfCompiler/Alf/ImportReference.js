const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/ImportReference");


/// <summary>
/// A reference to an element or package to be imported into a unit.
/// </summary>
class ImportReference extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/// <summary>
		/// An indication of the visibility of the import.
		/// </summary>
		this.visibility = null;
		/**
		 * A reference to the imported element denoted by the given qualified name.
		 */
		this.referent=null;
		/**
		 * The name of the element or package to be imported.
		 */
		this.referentName=null;	

	}

}//end ImportReference

 module.exports = {
 	ImportReference: ImportReference
 }