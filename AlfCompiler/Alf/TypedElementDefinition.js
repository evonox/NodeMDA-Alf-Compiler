const base = require("./Member");
const mappingMixin = require("../MappingMixins/TypedElementDefinition");


/// <summary>
/// The common properties of the definitions of typed elements.
/// </summary>
class TypedElementDefinition extends mappingMixin(base.Member) {

	constructor() {

		super();

		/// <summary>
		/// Whether the element being defined is non-unique.
		/// </summary>
		this.isNonunique = false;
		/// <summary>
		/// Whether the element being defined is ordered.
		/// </summary>
		this.isOrdered = null;
		/// <summary>
		/// The multiplicity lower bound of the element being defined.
		/// </summary>
		this.lower = null;
		/// <summary>
		/// The string image of the literal given to specify the lower bound of the
		/// multiplicity of the element being defined.
		/// </summary>
		this.lowerBound = null;
		/// <summary>
		/// The multiplicity upper bound of the element being defined.
		/// </summary>
		this.upper = null;
		/// <summary>
		/// The string image of the literal given to specify the upper bound of the
		/// multiplicity of the element being defined.
		/// </summary>
		this.upperBound = "1";
		this.type=null;
		/**
		 * The name of the type of the element being defined.
		 */
		this.typeName=null;	

	}

}//end TypedElementDefinition

 module.exports = {
 	TypedElementDefinition: TypedElementDefinition
 }