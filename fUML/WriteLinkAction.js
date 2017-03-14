const LinkAction = require("./LinkAction");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/WriteLinkAction");



class WriteLinkAction extends codeGenMixin(LinkAction) {

	constructor() {

		super();

	

	}

}//end WriteLinkAction

 module.exports = WriteLinkAction;
