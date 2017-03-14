const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/EnumerationLiteral");



class EnumerationLiteral extends InstanceSpecification {

	constructor() {

		super();

		this.classifier=null;	

	}

}//end EnumerationLiteral

 module.exports = EnumerationLiteral;
