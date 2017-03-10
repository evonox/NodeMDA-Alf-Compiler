const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/NameBinding");


/// <summary>
/// An unqualified name, optionally with a template binding.
/// </summary>
class NameBinding extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/// <summary>
		/// An unqualified name. For names that appeared as unrestricted names in the input
		/// text, the string value here excludes the surrounding single quote characters
		/// and has any escape sequences resolved to the denoted special characters.
		/// </summary>
		this.name = null;
		this.qualifiedName=null;
		/**
		 * The template binding to be used, if the name denotes a template.
		 */
		this.binding=null;	

	}

}//end NameBinding

 module.exports = {
 	NameBinding: NameBinding
 }