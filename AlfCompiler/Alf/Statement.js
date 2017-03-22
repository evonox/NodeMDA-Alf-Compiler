const base = require("./DocumentedElement");
const mappingMixin = require("../MappingMixins/Statement");


/// <summary>
/// A model of an Alf statement.
/// </summary>
class Statement extends mappingMixin(base.DocumentedElement) {

	constructor() {

		super();

		/// <summary>
		/// Whether this statement should be executed in isolation.
		/// </summary>
		this.isIsolated = null;
		/**
		 * The assigned sources for local names available lexically before this statement.
		 */
		this.assignmentBefore=null;
		/**
		 * The statement immediately enclosing this statement, if any.
		 */
		this.enclosingStatement=null;
		/**
		 * The assigned sources for local names available lexically after this statement.
		 * This includes not only any assignments made within the statement, but also any
		 * assignments that are unchanged from before the statement.
		 */
		this.assignmentAfter=null;
		/**
		 * The annotations applied to this statement.
		 */
		this.annotation=null;	

	}

	/// <summary>
	/// Returns true if the given annotation is allowed for this kind of statement. By
	/// default, only an @isolated annotation is allowed, with no arguments. This
	/// operation is redefined only in subclasses of Statement for kinds of statements
	/// that allow different annotations than this default.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

}//end Statement

 module.exports = {
 	Statement: Statement
 }