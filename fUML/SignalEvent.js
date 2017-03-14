const MessageEvent = require("./MessageEvent");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/SignalEvent");



class SignalEvent extends codeGenMixin(MessageEvent) {

	constructor() {

		super();

		/**
		 * The specific signal that is associated with this event.
		 */
		this.signal=null;	

	}

}//end SignalEvent

 module.exports = SignalEvent;
