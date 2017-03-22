const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/TaggedValueList");


/// <summary>
/// A set of tagged values for a stereotype application.
/// </summary>
class TaggedValueList extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/**
		 * The tagged values in the set.
		 */
		this.taggedValue=null;	

	}

}//end TaggedValueList

 module.exports = {
 	TaggedValueList: TaggedValueList
 }