const base = require("./Statement");


/// <summary>
/// A statement that executes a block.
/// </summary>
class BlockStatement extends base.Statement {

	constructor() {

		super();

		/// <summary>
		/// Whether the statements in the block of this block statement should be executed
		/// concurrently.
		/// </summary>
		this.isParallel = null;
		/**
		 * The block to be executed.
		 */
		this.block=null;	

	}

	/// <summary>
	/// In addition to an @isolated annotation, a block statement may have a @parallel
	/// annotation. It may not have any arguments.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

}//end BlockStatement

 module.exports = {
 	BlockStatement: BlockStatement
 }