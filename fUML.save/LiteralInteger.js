const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/LiteralInteger");



class LiteralInteger extends LiteralSpecification {

	constructor() {

		super();

		/// <summary>
		/// The specified Integer value.
		/// </summary>
		this.value = null;	

	}

}//end LiteralInteger

 module.exports = LiteralInteger;
