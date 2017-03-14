const NamedElement = require("./NamedElement");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/RedefinableElement");



class RedefinableElement extends codeGenMixin(NamedElement) {

	constructor() {

		super();

		/// <summary>
		/// Indicates whether it is possible to further specialize a RedefinableElement. If
		/// the value is true, then it is not possible to further specialize the
		/// RedefinableElement.
		/// </summary>
		this.isLeaf = null;
		/**
		 * The redefinable element that is being redefined by this element.
		 */
		this.redefinedElement=null;
		/**
		 * References the contexts that this element may be redefined from.
		 */
		this.redefinitionContext=null;	

	}

}//end RedefinableElement

 module.exports = RedefinableElement;
