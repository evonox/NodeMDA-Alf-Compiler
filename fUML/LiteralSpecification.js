const ValueSpecification = require("./ValueSpecification");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/LiteralSpecification");



class LiteralSpecification extends codeGenMixin(ValueSpecification) {

	constructor() {

		super();

	

	}

}//end LiteralSpecification

 module.exports = LiteralSpecification;
