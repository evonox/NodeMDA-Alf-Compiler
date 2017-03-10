const base = require("./SequenceElements");
const mappingMixin = require("../MappingMixins/SequenceExpressionList");


/// <summary>
/// A specification of the elements of a sequence using a list of expressions.
/// </summary>
class SequenceExpressionList extends mappingMixin(base.SequenceElements) {

	constructor() {

		super();

		/**
		 * The list of expressions whose values determine the elements of the sequence.
		 */
		this.element=null;	

	}

}//end SequenceExpressionList

 module.exports = {
 	SequenceExpressionList: SequenceExpressionList
 }