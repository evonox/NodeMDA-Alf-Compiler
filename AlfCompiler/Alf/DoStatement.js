const base = require("./Statement");
const mappingMixin = require("../MappingMixins/DoStatement");


/// <summary>
/// A looping statement for which the continuation condition is first tested after
/// the first iteration.
/// </summary>
class DoStatement extends mappingMixin(base.Statement) {

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

}//end DoStatement

 module.exports = {
 	DoStatement: DoStatement
 }