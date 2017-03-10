const base = require("./BinaryExpression");


/// <summary>
/// A binary expression with a relational operator.
/// </summary>
class RelationalExpression extends base.BinaryExpression {

	constructor() {

		super();

		/// <summary>
		/// Whether this is an UnlimitedNatural comparison.
		/// </summary>
		this.isUnlimitedNatural = null;	

	}

}//end RelationalExpression

 module.exports = {
 	RelationalExpression: RelationalExpression
 }