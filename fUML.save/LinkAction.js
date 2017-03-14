const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/LinkAction");



class LinkAction extends Action {

	constructor() {

		super();

		this.inputValue=null;
		/**
		 * Data identifying one end of a link by the objects on its ends and qualifiers.
		 */
		this.endData=null;	

	}

}//end LinkAction

 module.exports = LinkAction;
