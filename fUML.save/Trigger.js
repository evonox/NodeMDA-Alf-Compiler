const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Trigger");



class Trigger extends NamedElement {

	constructor() {

		super();

		/**
		 * The event that causes the trigger.
		 */
		this.event=null;	

	}

}//end Trigger

 module.exports = Trigger;
