const base = require("./NamedExpression");


/// <summary>
/// A named argument expression for an output parameter.
/// </summary>
class OutputNamedExpression extends base.NamedExpression {

	constructor() {

		super();

		/**
		 * The argument expression considered as an assignment left-hand side.
		 */
		this.leftHandSide=null;	

	}

}//end OutputNamedExpression

 module.exports = {
 	OutputNamedExpression: OutputNamedExpression
 }