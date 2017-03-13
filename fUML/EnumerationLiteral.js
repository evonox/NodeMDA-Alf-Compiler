const base = require("./InstanceSpecification");



class EnumerationLiteral extends base.InstanceSpecification {

	constructor() {

		super();

		this.classifier=null;	

	}

}//end EnumerationLiteral

 module.exports = {
 	EnumerationLiteral: EnumerationLiteral
 }