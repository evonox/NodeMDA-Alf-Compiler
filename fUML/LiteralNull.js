const LiteralSpecification = require("./LiteralSpecification");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/LiteralNull");



class LiteralNull extends codeGenMixin(LiteralSpecification) {

	constructor() {

		super();

	

	}

}//end LiteralNull

 module.exports = LiteralNull;
