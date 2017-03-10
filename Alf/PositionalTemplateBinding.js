const base = require("./TemplateBinding");
const mappingMixin = require("../MappingMixins/PositionalTemplateBinding");


/// <summary>
/// A template binding in which the arguments are matched to formal template
/// parameters in order by position.
/// </summary>
class PositionalTemplateBinding extends mappingMixin(base.TemplateBinding) {

	constructor() {

		super();

		/**
		 * The arguments for this template binding, to be matched by position to the
		 * template parameters.
		 */
		this.argumentName=null;	

	}

}//end PositionalTemplateBinding

 module.exports = {
 	PositionalTemplateBinding: PositionalTemplateBinding
 }