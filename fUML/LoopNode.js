const StructuredActivityNode = require("./StructuredActivityNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/LoopNode");



class LoopNode extends codeGenMixin(StructuredActivityNode) {

	constructor() {

		super();

		/// <summary>
		/// If true, the test is performed before the first execution of the body.
		/// If false, the body is executed once before the test is performed.
		/// </summary>
		this.isTestedFirst = null;
		this.setupPart=null;
		this.loopVariable=null;
		this.result=null;
		this.bodyPart=null;
		/**
		 * An output pin within the test fragment the value of which is examined after
		 * execution of the test to determine whether to execute the loop body.
		 */
		this.decider=null;
		/**
		 * A list of output pins within the body fragment the values of which are moved to
		 * the loop variable pins after completion of execution of the body, before the
		 * next iteration of the loop begins or before the loop exits.
		 */
		this.bodyOutput=null;
		/**
		 * A list of values that are moved into the loop variable pins before the first
		 * iteration of the loop.
		 */
		this.loopVariableInput=null;
		/**
		 * The set of nodes, edges, and designated value that compute a Boolean value to
		 * determine if another execution of the body will be performed.
		 */
		this.test=null;	

	}

}//end LoopNode

 module.exports = LoopNode;
