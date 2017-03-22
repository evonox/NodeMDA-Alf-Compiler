const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/TemplateParameterSubstitution");


/// <summary>
/// A specification of the substitution of an argument type name for a template
/// parameter.
/// </summary>
class TemplateParameterSubstitution extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/// <summary>
		/// The name of the template parameter.
		/// </summary>
		this.parameterName = null;
		/**
		 * The name of the argument type.
		 */
		this.argumentName=null;	

	}

}//end TemplateParameterSubstitution

 module.exports = {
 	TemplateParameterSubstitution: TemplateParameterSubstitution
 }