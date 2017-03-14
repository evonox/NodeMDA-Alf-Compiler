const NamedElement = require("./NamedElement");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Trigger");



class Trigger extends codeGenMixin(NamedElement) {

	constructor() {

		super();

		/**
		 * The event that causes the trigger.
		 */
		this.event=null;	

	}

}//end Trigger

 module.exports = Trigger;
