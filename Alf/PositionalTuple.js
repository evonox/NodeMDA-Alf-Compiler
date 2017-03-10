const base = require("./Tuple");


/// <summary>
/// A tuple in which the arguments are matched to parameters in order by position.
/// </summary>
class PositionalTuple extends base.Tuple {

	constructor() {

		super();

		/**
		 * The argument expressions for this tuple, to be matched by position to the
		 * invocation parameters.
		 */
		this.expression=null;	

	}

}//end PositionalTuple

 module.exports = {
 	PositionalTuple: PositionalTuple
 }