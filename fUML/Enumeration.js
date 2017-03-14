const DataType = require("./DataType");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Enumeration");



class Enumeration extends codeGenMixin(DataType) {

	constructor() {

		super();

		/**
		 * The ordered collection of literals for the enumeration.
		 * The ordered set of literals for this Enumeration.
		 */
		this.ownedLiteral=null;	

	}

}//end Enumeration

 module.exports = Enumeration;
