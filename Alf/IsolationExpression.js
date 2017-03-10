const base = require("./UnaryExpression");


/// <summary>
/// An expression used to evaluate its operand expression in isolation.
/// </summary>
class IsolationExpression extends base.UnaryExpression {

	constructor() {

		super();

	

	}

}//end IsolationExpression

 module.exports = {
 	IsolationExpression: IsolationExpression
 }