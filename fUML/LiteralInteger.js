const base = require("./LiteralSpecification");



class LiteralInteger extends base.LiteralSpecification {

	constructor() {

		super();

		/// <summary>
		/// The specified Integer value.
		/// </summary>
		this.value = null;	

	}

}//end LiteralInteger

 module.exports = {
 	LiteralInteger: LiteralInteger
 }