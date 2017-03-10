const base = require("./Expression");


/// <summary>
/// An expression comprising a reference to a structural feature.
/// </summary>
class PropertyAccessExpression extends base.Expression {

	constructor() {

		super();

		/**
		 * A reference to a structural feature.
		 */
		this.featureReference=null;
		/**
		 * The referenced structural feature.
		 */
		this.feature=null;	

	}

	/// <summary>
	/// The assignments after a property access expression are the same as those after
	/// the target expression of its feature reference.
	/// </summary>
	updateAssignments() {

	}

}//end PropertyAccessExpression

 module.exports = {
 	PropertyAccessExpression: PropertyAccessExpression
 }