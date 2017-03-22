const base = require("./Statement");
const mappingMixin = require("../MappingMixins/BreakStatement");


/// <summary>
/// A statement that causes the termination of execution of an immediately
/// enclosing block.
/// </summary>
class BreakStatement extends mappingMixin(base.Statement) {

	constructor() {

		super();

		/**
		 * The enclosing statement that is terminated by this break statement.
		 */
		this.target=null;	

	}

	/// <summary>
	/// A break statement may not have any annotations.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

}//end BreakStatement

 module.exports = {
 	BreakStatement: BreakStatement
 }