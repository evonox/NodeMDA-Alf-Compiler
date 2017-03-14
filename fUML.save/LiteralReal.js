const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/LiteralReal");



class LiteralReal extends LiteralSpecification {

	constructor() {

		super();

		this.value = null;	

	}

}//end LiteralReal

 module.exports = LiteralReal;
