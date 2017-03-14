const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ReduceAction");



class ReduceAction extends Action {

	constructor() {

		super();

		/// <summary>
		/// Tells whether the order of the input collection should determine the order in
		/// which the behavior is applied to its elements.
		/// </summary>
		this.isOrdered = null;
		/**
		 * Behavior that is applied to two elements of the input collection to produce a
		 * value that is the same type as elements of the collection.
		 */
		this.reducer=null;
		/**
		 * The collection to be reduced.
		 */
		this.collection=null;
		/**
		 * Gives the output pin on which the result is put.
		 */
		this.result=null;	

	}

}//end ReduceAction

 module.exports = ReduceAction;
