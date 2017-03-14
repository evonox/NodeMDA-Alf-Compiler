const Action = require("./Action");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/DestroyObjectAction");



class DestroyObjectAction extends codeGenMixin(Action) {

	constructor() {

		super();

		/// <summary>
		/// Specifies whether links in which the object participates are destroyed along
		/// with the object.
		/// </summary>
		this.isDestroyLinks = null;
		/// <summary>
		/// Specifies whether objects owned by the object are destroyed along with the
		/// object.
		/// </summary>
		this.isDestroyOwnedObjects = null;
		/**
		 * The input pin providing the object to be destroyed.
		 */
		this.target=null;	

	}

}//end DestroyObjectAction

 module.exports = DestroyObjectAction;
