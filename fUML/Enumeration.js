const base = require("./DataType");



class Enumeration extends base.DataType {

	constructor() {

		super();

		/**
		 * The ordered collection of literals for the enumeration.
		 * The ordered set of literals for this Enumeration.
		 */
		this.ownedLiteral=null;	

	}

}//end Enumeration

 module.exports = {
 	Enumeration: Enumeration
 }