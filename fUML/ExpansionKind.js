const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ExpansionKind");



class ExpansionKind extends codeGenMixin(Object) {

	constructor() {

		/// <summary>
		/// The executions are independent. They may be executed concurrently.
		/// </summary>
		this.parallel = null;
		/// <summary>
		/// The executions are dependent and must be executed one at a time, in order of
		/// the collection elements.
		/// </summary>
		this.iterative = null;
		/// <summary>
		/// A stream of collection elements flows into a single execution, in order of the
		/// collection elements.
		/// </summary>
		this.stream = null;	

	}

}//end ExpansionKind

 module.exports = ExpansionKind;
