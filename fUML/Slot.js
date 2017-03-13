const base = require("./Element");



class Slot extends base.Element {

	constructor() {

		super();

		/**
		 * The structural feature that specifies the values that may be held by the slot.
		 */
		this.definingFeature=null;
		/**
		 * The value or values corresponding to the defining feature for the owning
		 * instance specification.
		 */
		this.value=null;	

	}

}//end Slot

 module.exports = {
 	Slot: Slot
 }