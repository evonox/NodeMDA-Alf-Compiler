const base = require("./NamedElement");



class TypedElement extends base.NamedElement {

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

 module.exports = {
 	TypedElement: TypedElement
 }