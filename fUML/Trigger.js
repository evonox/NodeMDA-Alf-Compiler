const base = require("./NamedElement");



class Trigger extends base.NamedElement {

	constructor() {

		super();

		/**
		 * The event that causes the trigger.
		 */
		this.event=null;	

	}

}//end Trigger

 module.exports = {
 	Trigger: Trigger
 }