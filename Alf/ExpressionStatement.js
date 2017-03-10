const base = require("./Statement");
const mappingMixin = require("../MappingMixins/ExpressionStatement");


/// <summary>
/// A statement that evaluates an expression when executed.
/// </summary>
class ExpressionStatement extends mappingMixin(base.Statement) {

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