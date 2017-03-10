const base = require("./Expression");


/// <summary>
/// An expression used to assign a value to a local name, parameter or property.
/// </summary>
class AssignmentExpression extends base.Expression {

	constructor() {

		super();

		/// <summary>
		/// If this is a compound assignment, whether the compound assignment operator is
		/// arithmetic or not.
		/// </summary>
		this.isArithmetic = null;
		/// <summary>
		/// Whether BitString conversion is required for this assignment.
		/// </summary>
		this.isBitStringConversion = null;
		/// <summary>
		/// Whether collection conversion is required for this assignment.
		/// </summary>
		this.isCollectionConversion = null;
		/// <summary>
		/// Whether this assignment updates an attribute of a data value held in a local
		/// name or parameter.
		/// </summary>
		this.isDataValueUpdate = null;
		/// <summary>
		/// Whether this assignment is the definition of a new local name or not.
		/// </summary>
		this.isDefinition = null;
		/// <summary>
		/// Whether the left-hand side is a feature or not.
		/// </summary>
		this.isFeature = null;
		/// <summary>
		/// If the left-hand side is a feature, whether it has an index or not.
		/// </summary>
		this.isIndexed = null;
		/// <summary>
		/// Whether this is a simple assignment or not.
		/// </summary>
		this.isSimple = null;
		/// <summary>
		/// The image of the assignment operator used in the expression.
		/// </summary>
		this.operator = null;
		/**
		 * The left-hand side of the assignment, to which a value is to be assigned.
		 */
		this.leftHandSide=null;
		/**
		 * If this is a compound assignment, then the effective expression used to obtain
		 * the original value of the left-hand side to be updated.
		 */
		this.expression=null;
		/**
		 * If the left-hand side is a name, then the new assigned source for that name.
		 */
		this.assignment=null;
		/**
		 * The right-hand side expression of the assignment, which produces the value
		 * being assigned.
		 */
		this.rightHandSide=null;
		/**
		 * If the left-hand side is a feature, then the referent for that feature.
		 */
		this.feature=null;	

	}

	/// <summary>
	/// The assignments after an assignment expression are the assignments after the
	/// left-hand side, updated by the assignment from the assignment statement, if any.
	/// 
	/// </summary>
	updateAssignments() {

	}

}//end AssignmentExpression

 module.exports = {
 	AssignmentExpression: AssignmentExpression
 }