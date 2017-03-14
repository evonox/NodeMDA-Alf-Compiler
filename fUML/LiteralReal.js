const LiteralSpecification = require("./LiteralSpecification");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/LiteralReal");



class LiteralReal extends codeGenMixin(LiteralSpecification) {

	constructor() {

		super();

		this.value = null;	

	}

}//end LiteralReal

 module.exports = LiteralReal;
