const LiteralSpecification = require("./LiteralSpecification");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/LiteralBoolean");



class LiteralBoolean extends codeGenMixin(LiteralSpecification) {

	constructor() {

		super();

		/// <summary>
		/// The specified Boolean value.
		/// </summary>
		this.value = null;	

	}

}//end LiteralBoolean

 module.exports = LiteralBoolean;
