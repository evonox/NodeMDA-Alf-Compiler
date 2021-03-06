const base = require("./Tuple");
const mappingMixin = require("../MappingMixins/NamedTuple");


/// <summary>
/// A tuple in which the arguments are matched to parameters by name.
/// </summary>
class NamedTuple extends mappingMixin(base.Tuple) {

	constructor() {

		super();

		/**
		 * The argument expressions for this tuple paired with the corresponding parameter
		 * names.
		 */
		this.namedExpression=null;	

	}

}//end NamedTuple

 module.exports = {
 	NamedTuple: NamedTuple
 }