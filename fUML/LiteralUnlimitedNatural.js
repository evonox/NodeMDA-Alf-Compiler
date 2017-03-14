const LiteralSpecification = require("./LiteralSpecification");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/LiteralUnlimitedNatural");



class LiteralUnlimitedNatural extends codeGenMixin(LiteralSpecification) {

	constructor() {

		super();

		/// <summary>
		/// The specified UnlimitedNatural value.
		/// </summary>
		this.value = new UnlimitedNatural(0);	

	}

}//end LiteralUnlimitedNatural

 module.exports = LiteralUnlimitedNatural;
