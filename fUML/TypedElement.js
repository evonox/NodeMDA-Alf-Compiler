const NamedElement = require("./NamedElement");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/TypedElement");



class TypedElement extends codeGenMixin(NamedElement) {

	constructor() {

		super();

		/**
		 * Redefines the corresponding property from Basic to derive this information from
		 * the return result for this Operation.
		 * The type of the TypedElement.
		 */
		this.type=null;	

	}

}//end TypedElement

 module.exports = TypedElement;
