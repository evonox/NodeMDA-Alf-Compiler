const LiteralSpecification = require("./LiteralSpecification");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/LiteralString");



class LiteralString extends codeGenMixin(LiteralSpecification) {

	constructor() {

		super();

		/// <summary>
		/// The specified String value.
		/// </summary>
		this.value = null;	

	}

}//end LiteralString

 module.exports = LiteralString;
