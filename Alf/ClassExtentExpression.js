const base = require("./Expression");


/// <summary>
/// An expression used to obtain the objects in the extent of a class.
/// </summary>
class ClassExtentExpression extends base.Expression {

	constructor() {

		super();

		/**
		 * The name of the class whose extent is to be obtained.
		 */
		this.className=null;	

	}

}//end ClassExtentExpression

 module.exports = {
 	ClassExtentExpression: ClassExtentExpression
 }