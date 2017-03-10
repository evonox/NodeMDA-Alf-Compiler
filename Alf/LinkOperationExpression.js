const base = require("./InvocationExpression");
const mappingMixin = require("../MappingMixins/LinkOperationExpression");


/// <summary>
/// An expression used to create or destroy the links of an association.
/// </summary>
class LinkOperationExpression extends mappingMixin(base.InvocationExpression) {

	constructor() {

		super();

		/// <summary>
		/// Whether the operation is clearing the association.
		/// </summary>
		this.isClear = null;
		/// <summary>
		/// Whether the operation is for link creation.
		/// </summary>
		this.isCreation = null;
		/// <summary>
		/// The name of the link operation.
		/// </summary>
		this.operation = null;
		/**
		 * The qualified name of the association whose links are being acted on.
		 */
		this.associationName=null;	

	}

	/// <summary>
	/// For a clear association operation, returns a single, typeless parameter.
	/// Otherwise, returns the ends of the named association.
	/// </summary>
	parameterElements() {

	}

}//end LinkOperationExpression

 module.exports = {
 	LinkOperationExpression: LinkOperationExpression
 }