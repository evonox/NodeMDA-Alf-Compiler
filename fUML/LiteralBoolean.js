const base = require("./LiteralSpecification");



class LiteralBoolean extends base.LiteralSpecification {

	constructor() {

		super();

		/// <summary>
		/// The specified Boolean value.
		/// </summary>
		this.value = null;	

	}

}//end LiteralBoolean

 module.exports = {
 	LiteralBoolean: LiteralBoolean
 }