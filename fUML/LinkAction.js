const base = require("./Action");



class LinkAction extends base.Action {

	constructor() {

		super();

		this.inputValue=null;
		/**
		 * Data identifying one end of a link by the objects on its ends and qualifiers.
		 */
		this.endData=null;	

	}

}//end LinkAction

 module.exports = {
 	LinkAction: LinkAction
 }