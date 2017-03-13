const base = require("./MessageEvent");



class SignalEvent extends base.MessageEvent {

	constructor() {

		super();

		/**
		 * The specific signal that is associated with this event.
		 */
		this.signal=null;	

	}

}//end SignalEvent

 module.exports = {
 	SignalEvent: SignalEvent
 }