const base = require("./TemplateBinding");


/// <summary>
/// A template binding in which the arguments are matched to formal template
/// parameters by name.
/// </summary>
class NamedTemplateBinding extends base.TemplateBinding {

	constructor() {

		super();

		/**
		 * The substitutions of arguments for template parameters.
		 */
		this.substitution=null;	

	}

}//end NamedTemplateBinding

 module.exports = {
 	NamedTemplateBinding: NamedTemplateBinding
 }