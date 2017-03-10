const base = require("./Statement");
const mappingMixin = require("../MappingMixins/WhileStatement");


/// <summary>
/// A looping statement for which the continuation condition is first tested before
/// the first iteration.
/// </summary>
class WhileStatement extends mappingMixin(base.Statement) {

	constructor() {

		super();

		/**
		 * The expression to be evaluated to determine whether to continue looping.
		 */
		this.condition=null;
		/**
		 * The sequence of statements to be iteratively executed.
		 */
		this.body=null;	

	}

}//end WhileStatement

 module.exports = {
 	WhileStatement: WhileStatement
 }