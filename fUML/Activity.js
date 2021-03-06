const Behavior = require("./Behavior");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Activity");



/// <summary>
/// import fUML.Syntax.Activities.CompleteStructuredActivities.*;
/// </summary>
class Activity extends codeGenMixin(Behavior) {

	constructor() {

		super();

		/// <summary>
		/// If true, this activity must not make any changes to variables outside the
		/// activity or to objects. (This is an assertion, not an executable property. It
		/// may be used by an execution engine to optimize model execution. If the
		/// assertion is violated by the action, then the model is ill-formed.) The default
		/// is false (an activity may make nonlocal changes).
		/// </summary>
		this.isReadOnly = null;
		/**
		 * Top-level structured nodes in the activity.
		 */
		this.structuredNode=null;
		/**
		 * Nodes coordinated by the activity.
		 */
		this.node=null;
		/**
		 * Edges expressing flow between nodes of the activity.
		 */
		this.edge=null;	

	}

}//end Activity

 module.exports = Activity;
