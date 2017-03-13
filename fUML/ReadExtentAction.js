const base = require("./Action");



class ReadExtentAction extends base.Action {

	constructor() {

		super();

		/**
		 * The runtime instances of the classifier.
		 */
		this.result=null;
		/**
		 * The classifier whose instances are to be retrieved.
		 */
		this.classifier=null;	

	}

}//end ReadExtentAction

 module.exports = {
 	ReadExtentAction: ReadExtentAction
 }