const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Behavior");



class Behavior extends Class {

	constructor() {

		super();

		/// <summary>
		/// Tells whether the behavior can be invoked while it is still executing from a
		/// previous invocation.
		/// </summary>
		this.isReentrant = true;
		/**
		 * Designates a behavioral feature that the behavior implements. The behavioral
		 * feature must be owned by the classifier that owns the behavior or be inherited
		 * by it. The parameters of the behavioral feature and the implementing behavior
		 * must match. If a behavior does not have a specification, it is directly
		 * associated with a classifier (i.e., it is the behavior of the classifier as a
		 * whole).
		 */
		this.specification=null;
		/**
		 * References a list of parameters to the behavior which describes the order and
		 * type of arguments that can be given when the behavior is invoked and of the
		 * values which will be returned when the behavior completes its execution.
		 */
		this.ownedParameter=null;
		/**
		 * The classifier that is the context for the execution of the behavior. If the
		 * behavior is owned by a BehavioredClassifier, that classifier is the context.
		 * Otherwise, the context is the first BehavioredClassifier reached by following
		 * the chain of owner relationships. For example, following this algorithm, the
		 * context of an entry action in a state machine is the classifier that owns the
		 * state machine. The features of the context classifier as well as the elements
		 * visible to the context classifier are visible to the behavior.
		 */
		this.context=null;	

	}

}//end Behavior

 module.exports = Behavior;
