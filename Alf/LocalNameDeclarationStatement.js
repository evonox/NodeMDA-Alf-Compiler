const base = require("./Statement");


/// <summary>
/// A statement that declares the type of a local name and assigns it an initial
/// value.
/// </summary>
class LocalNameDeclarationStatement extends base.Statement {

	constructor() {

		super();

		/// <summary>
		/// Whether the local name is to have a multiplicity upper bound of * rather than 1.
		/// 
		/// </summary>
		this.hasMultiplicity = null;
		/// <summary>
		/// The local name being declared.
		/// </summary>
		this.name = null;
		/**
		 * The type declared for the given local name.
		 */
		this.type=null;
		/**
		 * The expression to be evaluated to provide the initial value to be assigned to
		 * the local name.
		 */
		this.expression=null;
		/**
		 * The declared type of the local name.
		 */
		this.typeName=null;	

	}

}//end LocalNameDeclarationStatement

 module.exports = {
 	LocalNameDeclarationStatement: LocalNameDeclarationStatement
 }