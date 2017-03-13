const base = require("./Action");



/// <summary>
/// The context of the containing activity of the accept event action must be an
/// active class.
/// An accept event action may not be contained directly or indirectly in the test
/// part of a clause or loop node.
/// </summary>
class AcceptEventAction extends base.Action {

	constructor() {

		super();

		/// <summary>
		/// Indicates whether there is a single output pin for the event, or multiple
		/// output pins for attributes of the event.
		/// </summary>
		this.isUnmarshall = null;
		/**
		 * The type of events accepted by the action, as specified by triggers. For
		 * triggers with signal events, a signal of the specified type or any subtype of
		 * the specified signal type is accepted.
		 */
		this.trigger=null;
		/**
		 * Pins holding the received event objects or their attributes. Event objects may
		 * be copied in transmission, so identity might not be preserved.
		 */
		this.result=null;	

	}

}//end AcceptEventAction

 module.exports = {
 	AcceptEventAction: AcceptEventAction
 }