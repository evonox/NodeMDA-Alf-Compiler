const base = require("./UnaryExpression");
const mappingMixin = require("../MappingMixins/ClassificationExpression");


/// <summary>
/// An expression used to test the dynamic type of its operand.
/// </summary>
class ClassificationExpression extends mappingMixin(base.UnaryExpression) {

	constructor() {

		super();

		/// <summary>
		/// Whether the test is for the operand to have the given type directly or to only
		/// conform to the given type.
		/// </summary>
		this.isDirect = null;
		/**
		 * The name of the type that the operand is to be tested against.
		 */
		this.typeName=null;
		/**
		 * Whether the test is for the operand to have the given type directly or to only
		 * conform to the given type.
		 */
		this.referent=null;	

	}

}//end ClassificationExpression

 module.exports = {
 	ClassificationExpression: ClassificationExpression
 }