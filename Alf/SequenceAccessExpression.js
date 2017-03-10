const base = require("./Expression");


/// <summary>
/// An expression used to access a specific element of a sequence.
/// </summary>
class SequenceAccessExpression extends base.Expression {

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