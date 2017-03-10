const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/TaggedValue");


/// <summary>
/// An assignment of a value to an attribute of an applied stereotype.
/// </summary>
class TaggedValue extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/// <summary>
		/// The name of the stereotype attribute to be assigned a value.
		/// </summary>
		this.name = null;
		/// <summary>
		/// For a numeric value, an optional unary plus or minus operator.
		/// </summary>
		this.operator = null;
		/// <summary>
		/// The string image of a literal value to be assigned to the stereotype attribute.
		/// 
		/// </summary>
		this.value = null;	

	}

}//end TaggedValue

 module.exports = {
 	TaggedValue: TaggedValue
 }