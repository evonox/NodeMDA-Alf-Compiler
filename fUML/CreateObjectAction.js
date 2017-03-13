const base = require("./Action");



class CreateObjectAction extends base.Action {

	constructor() {

		super();

		/**
		 * Classifier to be instantiated.
		 */
		this.classifier=null;
		/**
		 * Gives the output pin on which the result is put.
		 */
		this.result=null;	

	}

}//end CreateObjectAction

 module.exports = {
 	CreateObjectAction: CreateObjectAction
 }