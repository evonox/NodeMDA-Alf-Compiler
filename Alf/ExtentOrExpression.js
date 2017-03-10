

/// <summary>
/// The target of a sequence operation, reduction or expansion expression, which
/// may be either a primary expression or a class name denoting the class extent.
/// </summary>
class ExtentOrExpression  {

	constructor() {

		/**
		 * If the target is a qualified name, then that name, before it is disambiguated
		 * into either a name expression or a class name.
		 */
		this.name=null;
		/**
		 * The target primary expression, if it is not a qualified name.
		 */
		this.nonNameExpression=null;
		/**
		 * The effective expression for the target.
		 */
		this.expression=null;	

	}

}//end ExtentOrExpression

 module.exports = {
 	ExtentOrExpression: ExtentOrExpression
 }