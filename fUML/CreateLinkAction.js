const WriteLinkAction = require("./WriteLinkAction");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/CreateLinkAction");



class CreateLinkAction extends codeGenMixin(WriteLinkAction) {

	constructor() {

		super();

		/**
		 * Specifies ends of association and inputs.
		 */
		this.endData=null;	

	}

}//end CreateLinkAction

 module.exports = CreateLinkAction;
