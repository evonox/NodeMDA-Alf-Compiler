const TypedElement = require("./TypedElement");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ValueSpecification");



class ValueSpecification extends codeGenMixin(TypedElement) {

	constructor() {

		super();

	

	}

}//end ValueSpecification

 module.exports = ValueSpecification;
