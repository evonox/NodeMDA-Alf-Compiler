const base = require("./Classifier");



class Signal extends base.Classifier {

	constructor() {

		super();

		/**
		 * The attributes owned by the signal.
		 */
		this.ownedAttribute=null;
		this.reception=null;	

	}

}//end Signal

 module.exports = {
 	Signal: Signal
 }