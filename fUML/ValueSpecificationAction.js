const base = require("./Action");



class ValueSpecificationAction extends base.Action {

	constructor() {

		super();

		/**
		 * Gives the output pin on which the result is put.
		 */
		this.result=null;
		/**
		 * Value specification to be evaluated.
		 */
		this.value=null;	

	}

}//end ValueSpecificationAction

 module.exports = {
 	ValueSpecificationAction: ValueSpecificationAction
 }