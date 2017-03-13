const base = require("./LinkAction");



class ReadLinkAction extends base.LinkAction {

	constructor() {

		super();

		/**
		 * The pin on which are put the objects participating in the association at the
		 * end not specified by the inputs.
		 */
		this.result=null;	

	}

}//end ReadLinkAction

 module.exports = {
 	ReadLinkAction: ReadLinkAction
 }