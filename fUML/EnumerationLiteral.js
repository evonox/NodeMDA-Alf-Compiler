const InstanceSpecification = require("./InstanceSpecification");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/EnumerationLiteral");



class EnumerationLiteral extends codeGenMixin(InstanceSpecification) {

	constructor() {

		super();

		this.classifier=null;	

	}

}//end EnumerationLiteral

 module.exports = EnumerationLiteral;
