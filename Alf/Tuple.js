const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/Tuple");


/// <summary>
/// A list of expressions used to provide the arguments for an invocation.
/// </summary>
class Tuple extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/**
		 * The argument expressions from this tuple, matched to the output parameters
		 * (direction inout and out) of the invocation. An empty sequence construction
		 * expression is included for any output parameter that is not explicitly matched
		 * in the tuple.
		 */
		this.output=null;
		/**
		 * The argument expressions from this tuple, matched to the input parameters
		 * (direction in and inout) of the invocation. An empty sequence construction
		 * expression is included for any input parameter that is not explicitly matched
		 * in the tuple.
		 */
		this.input=null;	

	}

}//end Tuple

 module.exports = {
 	Tuple: Tuple
 }