const base = require("./Statement");
const mappingMixin = require("../MappingMixins/ForStatement");


/// <summary>
/// A looping statement that gives successive values to one or more loop variables
/// on each iteration.
/// </summary>
class ForStatement extends mappingMixin(base.Statement) {

	constructor() {

		super();

		/// <summary>
		/// Whether the for statement is parallel.
		/// </summary>
		this.isParallel = null;
		/**
		 * The sequence of statements to be iteratively executed.
		 */
		this.body=null;
		/**
		 * A list of definitions of one or more loop variables.
		 */
		this.variableDefinition=null;	

	}

	/// <summary>
	/// In addition to an @isolated annotation, a for statement may have a @parallel
	/// annotation.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

}//end ForStatement

 module.exports = {
 	ForStatement: ForStatement
 }