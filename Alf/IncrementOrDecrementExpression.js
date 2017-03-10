const base = require("./Expression");
const mappingMixin = require("../MappingMixins/IncrementOrDecrementExpression");


/// <summary>
/// A unary expression with either an increment or decrement operator.
/// </summary>
class IncrementOrDecrementExpression extends mappingMixin(base.Expression) {

	constructor() {

		super();

		/// <summary>
		/// Whether this expression updates an attribute of a data value held in a local
		/// name or parameter.
		/// </summary>
		this.isDataValueUpdate = null;
		/// <summary>
		/// Whether the operand is a feature or not.
		/// </summary>
		this.isFeature = null;
		/// <summary>
		/// If the operand is a feature, whether it has an index or not.
		/// </summary>
		this.isIndexed = null;
		/// <summary>
		/// Whether the operator is being used as a prefix or a postfix.
		/// </summary>
		this.isPrefix = null;
		/**
		 * If the operand is a feature, then the referent for that feature.
		 */
		this.feature=null;
		/**
		 * If the operand is a name, then the new assigned source for that name.
		 */
		this.assignment=null;
		/**
		 * The operand, which must have the form of an assignment left-hand side.
		 */
		this.operand=null;
		/**
		 * The effective expression used to obtain the original value of the operand to be
		 * updated.
		 */
		this.expression=null;	

	}

	/// <summary>
	/// The assignments after an increment and decrement expression include all those
	/// after its operand expression. Further, if the operand expression, considered as
	/// a left hand side, is a local name, then this is reassigned.
	/// </summary>
	updateAssignments() {

	}

}//end IncrementOrDecrementExpression

 module.exports = {
 	IncrementOrDecrementExpression: IncrementOrDecrementExpression
 }