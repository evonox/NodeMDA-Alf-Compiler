const base = require("./Action");



class TestIdentityAction extends base.Action {

	constructor() {

		super();

		/**
		 * Gives the pin on which an object is placed.
		 */
		this.second=null;
		/**
		 * Tells whether the two input objects are identical.
		 */
		this.result=null;
		/**
		 * Gives the pin on which an object is placed.
		 */
		this.first=null;	

	}

}//end TestIdentityAction

 module.exports = {
 	TestIdentityAction: TestIdentityAction
 }