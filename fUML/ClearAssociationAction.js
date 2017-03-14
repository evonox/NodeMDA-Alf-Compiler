const Action = require("./Action");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ClearAssociationAction");



class ClearAssociationAction extends codeGenMixin(Action) {

	constructor() {

		super();

		/**
		 * Association to be cleared.
		 */
		this.association=null;
		/**
		 * Gives the input pin from which is obtained the object whose participation in
		 * the association is to be cleared.
		 */
		this.object=null;	

	}

}//end ClearAssociationAction

 module.exports = ClearAssociationAction;
