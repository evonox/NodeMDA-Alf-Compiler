const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/NamedElement");



class NamedElement extends Element {

	constructor() {

		super();

		/// <summary>
		/// The name of the NamedElement.
		/// </summary>
		this.name = null;
		/// <summary>
		/// A name which allows the NamedElement to be identified within a hierarchy of
		/// nested Namespaces. It is constructed from the names of the containing
		/// namespaces starting at the root of the hierarchy and ending with the name of
		/// the NamedElement itself.
		/// </summary>
		this.qualifiedName = null;
		/// <summary>
		/// Determines where the NamedElement appears within different Namespaces within
		/// the overall model, and its accessibility.
		/// </summary>
		this.visibility = null;	

	}

}//end NamedElement

 module.exports = NamedElement;
