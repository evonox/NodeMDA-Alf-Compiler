const base = require("./SyntaxElement");


/// <summary>
/// A set of tagged values for a stereotype application.
/// </summary>
class TaggedValueList extends base.SyntaxElement {

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