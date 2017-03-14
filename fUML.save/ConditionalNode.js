const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ConditionalNode");



class ConditionalNode extends StructuredActivityNode {

	constructor() {

		super();

		/// <summary>
		/// If true, the modeler asserts that at least one test will succeed.
		/// </summary>
		this.isAssured = null;
		/// <summary>
		/// If true, the modeler asserts that at most one test will succeed.
		/// </summary>
		this.isDeterminate = null;
		/**
		 * Set of clauses composing the conditional.
		 */
		this.clause=null;
		/**
		 * A list of output pins that constitute the data flow outputs of the conditional.
		 */
		this.result=null;	

	}

}//end ConditionalNode

 module.exports = ConditionalNode;
