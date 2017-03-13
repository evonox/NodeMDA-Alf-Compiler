const base = require("./Action");



class ReadSelfAction extends base.Action {

	constructor() {

		super();

		/**
		 * Gives the output pin on which the hosting object is placed.
		 */
		this.result=null;	

	}

}//end ReadSelfAction

 module.exports = {
 	ReadSelfAction: ReadSelfAction
 }