const base = require("./Expression");
const mappingMixin = require("../MappingMixins/SequenceConstructionExpression");


/// <summary>
/// An expression used to construct a sequence of values.
/// </summary>
class SequenceConstructionExpression extends mappingMixin(base.Expression) {

	constructor() {

		super();

		/// <summary>
		/// Whether the sequence construction expression has a multiplicity indicator.
		/// </summary>
		this.hasMultiplicity = null;
		/**
		 * The specification of the elements in the sequence.
		 */
		this.elements=null;
		/**
		 * The name of the type of the elements in the sequence.
		 */
		this.typeName=null;	

	}

	/// <summary>
	/// If the elements of the sequence construction expression are given by a sequence
	/// expression list, then return the assignments after the last expression in the
	/// list (if the list is empty, then return the assignments before the sequence
	/// construction expression). If the elements are given by a sequence range, then
	/// return the union of the assignments after each of the expressions in the range.
	/// 
	/// </summary>
	updateAssignments() {

	}

}//end SequenceConstructionExpression

 module.exports = {
 	SequenceConstructionExpression: SequenceConstructionExpression
 }