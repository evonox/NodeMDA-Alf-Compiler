const base = require("./InvocationExpression");
const mappingMixin = require("../MappingMixins/InstanceCreationExpression");


/// <summary>
/// An expression used to create a new instance of a class or data type.
/// </summary>
class InstanceCreationExpression extends mappingMixin(base.InvocationExpression) {

	constructor() {

		super();

		/// <summary>
		/// Whether this is a constructorless object creation expression.
		/// </summary>
		this.isConstructorless = null;
		/// <summary>
		/// Whether this is an object creation expression or a data value creation
		/// expression.
		/// </summary>
		this.isObjectCreation = null;
		/**
		 * The name of the class constructor operation to be invoked or the name of a
		 * class or data type.
		 */
		this.constructor=null;	

	}

	/// <summary>
	/// Returns the parameters of a constructor operation or the attributes of a data
	/// type, or an empty set for a constructorless instance creation.
	/// </summary>
	parameterElements() {

	}

}//end InstanceCreationExpression

 module.exports = {
 	InstanceCreationExpression: InstanceCreationExpression
 }