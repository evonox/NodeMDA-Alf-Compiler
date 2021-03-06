const Element = require("./Element");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Generalization");



class Generalization extends codeGenMixin(Element) {

	constructor() {

		super();

		/// <summary>
		/// Indicates whether the specific classifier can be used wherever the general
		/// classifier can be used. If true, the execution traces of the specific
		/// classifier will be a superset of the execution traces of the general classifier.
		/// 
		/// </summary>
		this.isSubstitutable = true;
		/**
		 * References the general classifier in the Generalization relationship.
		 */
		this.general=null;	

	}

}//end Generalization

 module.exports = Generalization;
