const Feature = require("./Feature");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/BehavioralFeature");



class BehavioralFeature extends codeGenMixin(Feature) {

	constructor() {

		super();

		/// <summary>
		/// Specifies the semantics of concurrent calls to the same passive instance (i.e.,
		/// an instance originating from a class with isActive being false). Active
		/// instances control access to their own behavioral features.
		/// </summary>
		this.concurrency = null;
		/// <summary>
		/// If true, then the behavioral feature does not have an implementation, and one
		/// must be supplied by a more specific element. If false, the behavioral feature
		/// must have an implementation in the classifier or one must be inherited from a
		/// more general element.
		/// </summary>
		this.isAbstract = null;
		/**
		 * Specifies the ordered set of formal parameters of this BehavioralFeature.
		 * Specifies the ordered set of formal parameters owned by this BehavioralFeature.
		 * The parameter direction can be 'in', 'inout', 'out', pr 'return' to specify
		 * input, output, or return parameters.
		 */
		this.ownedParameter=null;
		/**
		 * A behavioral description that implements the behavioral feature. There may be
		 * at most one behavior for a particular pairing of a classifier (as owner of the
		 * behavior) and a behavioral feature (as specification of the behavior).
		 */
		this.method=null;	

	}

}//end BehavioralFeature

 module.exports = BehavioralFeature;
