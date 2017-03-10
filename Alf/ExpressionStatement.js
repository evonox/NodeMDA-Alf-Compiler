const base = require("./Statement");


/// <summary>
/// A statement that evaluates an expression when executed.
/// </summary>
class ExpressionStatement extends base.Statement {

	constructor() {

		super();

		/**
		 * The expression to be evaluated.
		 */
		this.expression=null;	

	}

}//end ExpressionStatement

 module.exports = {
 	ExpressionStatement: ExpressionStatement
 }