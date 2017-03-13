const base = require("./Action");



class ReadIsClassifiedObjectAction extends base.Action {

	constructor() {

		super();

		/// <summary>
		/// Indicates whether the classifier must directly classify the input object.
		/// </summary>
		this.isDirect = null;
		/**
		 * The classifier against which the classification of the input object is tested.
		 */
		this.classifier=null;
		/**
		 * After termination of the action, will hold the result of the test.
		 */
		this.result=null;
		/**
		 * Holds the object whose classification is to be tested.
		 */
		this.object=null;	

	}

}//end ReadIsClassifiedObjectAction

 module.exports = {
 	ReadIsClassifiedObjectAction: ReadIsClassifiedObjectAction
 }