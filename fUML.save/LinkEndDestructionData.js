const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/LinkEndDestructionData");



class LinkEndDestructionData extends LinkEndData {

	constructor() {

		super();

		/// <summary>
		/// Specifies whether to destroy duplicates of the value in nonunique association
		/// ends.
		/// </summary>
		this.isDestroyDuplicates = null;
		/**
		 * Specifies the position of an existing link to be destroyed in ordered nonunique
		 * association ends. The type of the pin is UnlimitedNatural, but the value cannot
		 * be zero or unlimited.
		 */
		this.destroyAt=null;	

	}

}//end LinkEndDestructionData

 module.exports = LinkEndDestructionData;
