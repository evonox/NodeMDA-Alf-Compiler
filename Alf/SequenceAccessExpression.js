const base = require("./Expression");
const mappingMixin = require("../MappingMixins/SequenceAccessExpression");


/// <summary>
/// An expression used to access a specific element of a sequence.
/// </summary>
class SequenceAccessExpression extends mappingMixin(base.Expression) {

	constructor() {

		super();

		/**
		 * The expression whose value is the sequence being accessed.
		 */
		this.primary=null;
		/**
		 * The expression whose value is the index of the element being accessed in the
		 * sequence.
		 */
		this.index=null;	

	}

}//end SequenceAccessExpression

 module.exports = {
 	SequenceAccessExpression: SequenceAccessExpression
 }