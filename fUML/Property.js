const base = require("./StructuralFeature");



class Property extends base.StructuralFeature {

	constructor() {

		super();

		/// <summary>
		/// Specifies the kind of aggregation that applies to the Property.
		/// </summary>
		this.aggregation = null;
		/// <summary>
		/// If isComposite is true, the object containing the attribute is a container for
		/// the object or value contained in the attribute.
		/// This is a derived value, indicating whether the aggregation of the Property is
		/// composite or not.
		/// </summary>
		this.isComposite = null;
		/// <summary>
		/// If isDerived is true, the value of the attribute is derived from information
		/// elsewhere.
		/// Specifies whether the Property is derived, i.e., whether its value or values
		/// can be computed from other information.
		/// </summary>
		this.isDerived = null;
		/// <summary>
		/// Specifies whether the property is derived as the union of all of the properties
		/// that are constrained to subset it.
		/// </summary>
		this.isDerivedUnion = null;
		this.isID = null;
		/// <summary>
		/// This redefines the corresponding attribute in Basic::Property and Abstractions::
		/// StructuralFeature.
		/// If true, the attribute may only be read, and not written.
		/// </summary>
		this.isReadOnly = null;
		this.opposite=null;
		/**
		 * References the association of which this property is a member, if any.
		 */
		this.association=null;	

	}

}//end Property

 module.exports = {
 	Property: Property
 }