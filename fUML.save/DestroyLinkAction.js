const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/DestroyLinkAction");



class DestroyLinkAction extends WriteLinkAction {

	constructor() {

		super();

		/**
		 * Specifies ends of association and inputs.
		 */
		this.endData=null;	

	}

}//end DestroyLinkAction

 module.exports = DestroyLinkAction;
