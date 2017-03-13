const base = require("./LiteralSpecification");



class LiteralString extends base.LiteralSpecification {

	constructor() {

		super();

		/// <summary>
		/// The specified String value.
		/// </summary>
		this.value = null;	

	}

}//end LiteralString

 module.exports = {
 	LiteralString: LiteralString
 }