const base = require("./LiteralSpecification");



class LiteralReal extends base.LiteralSpecification {

	constructor() {

		super();

		this.value = null;	

	}

}//end LiteralReal

 module.exports = {
 	LiteralReal: LiteralReal
 }