const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Element");



class Element extends Object {

	constructor() {

		this.ownedComment=null;
		/**
		 * The Elements owned by this element.
		 */
		this.ownedElement=null;	

	}

}//end Element

 module.exports = Element;
