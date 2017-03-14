const LinkAction = require("./LinkAction");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ReadLinkAction");



class ReadLinkAction extends codeGenMixin(LinkAction) {

	constructor() {

		super();

		/**
		 * The pin on which are put the objects participating in the association at the
		 * end not specified by the inputs.
		 */
		this.result=null;	

	}

}//end ReadLinkAction

 module.exports = ReadLinkAction;
