const base = require("./WriteLinkAction");



class DestroyLinkAction extends base.WriteLinkAction {

	constructor() {

		super();

		/**
		 * Specifies ends of association and inputs.
		 */
		this.endData=null;	

	}

}//end DestroyLinkAction

 module.exports = {
 	DestroyLinkAction: DestroyLinkAction
 }