const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ExpansionRegion");



class ExpansionRegion extends StructuredActivityNode {

	constructor() {

		super();

		/// <summary>
		/// The way in which the executions interact:
		/// 
		/// parallel: all interactions are independent
		/// 
		/// iterative: the interactions occur in order of the elements
		/// 
		/// stream: a stream of values flows into a single execution
		/// </summary>
		this.mode = null;
		/**
		 * An object node that holds a separate element of the input collection during
		 * each of the multiple executions of the region.
		 */
		this.inputElement=null;
		/**
		 * An object node that accepts a separate element of the output collection during
		 * each of the multiple executions of the region. The values are formed into a
		 * collection that is available when the execution of the region is complete.
		 */
		this.outputElement=null;	

	}

}//end ExpansionRegion

 module.exports = ExpansionRegion;
