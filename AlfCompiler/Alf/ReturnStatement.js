const base = require("./Statement");
const mappingMixin = require("../MappingMixins/ReturnStatement");


/// <summary>
/// A statement that provides a value for the return parameter of an activity.
/// </summary>
class ReturnStatement extends mappingMixin(base.Statement) {

	constructor() {

		super();

		/**
		 * A reference to the enclosing behavior for this return statement.
		 */
		this.behavior=null;
		/**
		 * The expression to be evaluated to provide the returned value.
		 */
		this.expression=null;	

	}

}//end ReturnStatement

 module.exports = {
 	ReturnStatement: ReturnStatement
 }