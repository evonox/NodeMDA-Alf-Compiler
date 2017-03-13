const base = require("./LiteralSpecification");



class LiteralUnlimitedNatural extends base.LiteralSpecification {

	constructor() {

		super();

		/// <summary>
		/// The specified UnlimitedNatural value.
		/// </summary>
		this.value = new UnlimitedNatural(0);	

	}

}//end LiteralUnlimitedNatural

 module.exports = {
 	LiteralUnlimitedNatural: LiteralUnlimitedNatural
 }