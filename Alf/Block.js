const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/Block");


/// <summary>
/// A grouped sequence of statements.
/// </summary>
class Block extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/**
		 * The assigned sources for local names available lexically after this block. This
		 * includes not only any assignments made within the block, but also any
		 * assignments that are unchanged from before the block.
		 */
		this.assignmentAfter=null;
		/**
		 * The ordered sequence of statements in the block.
		 */
		this.statement=null;
		/**
		 * The assigned sources for local names available lexically before this block.
		 */
		this.assignmentBefore=null;	

	}

}//end Block

 module.exports = {
 	Block: Block
 }