const base = require("./WriteLinkAction");



class CreateLinkAction extends base.WriteLinkAction {

	constructor() {

		super();

		/**
		 * Specifies ends of association and inputs.
		 */
		this.endData=null;	

	}

}//end CreateLinkAction

 module.exports = {
 	CreateLinkAction: CreateLinkAction
 }