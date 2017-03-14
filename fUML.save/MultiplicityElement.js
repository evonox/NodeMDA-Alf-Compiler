const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/MultiplicityElement");



class MultiplicityElement extends Element {

	constructor() {

		super();

		/// <summary>
		/// For a multivalued multiplicity, this attribute specifies whether the values in
		/// an instantiation of this element are sequentially ordered..
		/// For a multivalued multiplicity, this attribute specifies whether the values in
		/// an instantiation of this element are sequentially ordered.
		/// </summary>
		this.isOrdered = null;
		/// <summary>
		/// For a multivalued multiplicity, this attributes specifies whether the values in
		/// an instantiation of this element are unique.
		/// </summary>
		this.isUnique = true;
		/// <summary>
		/// Specifies the lower bound of the multiplicity interval.
		/// Specifies the lower bound of the multiplicity interval, if it is expressed as
		/// an integer.
		/// </summary>
		this.lower = 1;
		/// <summary>
		/// Specifies the upper bound of the multiplicity interval.
		/// Specifies the upper bound of the multiplicity interval, if it is expressed as
		/// an unlimited natural.
		/// </summary>
		this.upper = new UnlimitedNatural(1);
		/**
		 * The specification of the upper bound for this multiplicity.
		 */
		this.upperValue=null;
		/**
		 * The specification of the lower bound for this multiplicity.
		 */
		this.lowerValue=null;	

	}

}//end MultiplicityElement

 module.exports = MultiplicityElement;
