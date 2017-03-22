const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/TemplateBinding");


/// <summary>
/// A list of type names used to provide arguments for the parameters of a template.
/// 
/// </summary>
class TemplateBinding extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

	

	}

}//end TemplateBinding

 module.exports = {
 	TemplateBinding: TemplateBinding
 }