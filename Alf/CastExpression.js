const base = require("./Expression");


/// <summary>
/// An expression used to filter values by type.
/// </summary>
class CastExpression extends base.Expression {

	constructor() {

		super();

		/**
		 * The named type of the cast expression (if any)
		 */
		this.typeName=null;
		/**
		 * The operand expression of the cast expression.
		 */
		this.operand=null;	

	}

	/// <summary>
	/// The assignments after a cast expression are the same as those after its operand
	/// expression.
	/// </summary>
	updateAssignments() {

	}

}//end CastExpression

 module.exports = {
 	CastExpression: CastExpression
 }