const base = require("./Expression");


/// <summary>
/// An expression that comprises a name reference.
/// </summary>
class NameExpression extends base.Expression {

	constructor() {

		super();

		/**
		 * The identified enumeration literal, if the referenced name is for an
		 * enumeration literal.
		 */
		this.enumerationLiteral=null;
		/**
		 * The equivalent property access expression, if the referenced name disambiguates
		 * to a feature reference.
		 */
		this.propertyAccess=null;
		/**
		 * The qualified name referenced in this expression. (For a local name, this will
		 * actually have no qualification.)
		 */
		this.name=null;
		/**
		 * The assigned source for the referenced name, if the name is a local or
		 * parameter name.
		 */
		this.assignment=null;	

	}

	/// <summary>
	/// If propertyAccess is not empty (i.e., if the referenced name disambiguates to a
	/// feature reference), then return the assignments after the propertyAccess
	/// expression. Otherwise, return the result of the superclass updateAssignments
	/// operation.
	/// </summary>
	updateAssignments() {

	}

}//end NameExpression

 module.exports = {
 	NameExpression: NameExpression
 }