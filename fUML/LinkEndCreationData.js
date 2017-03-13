const base = require("./LinkEndData");



class LinkEndCreationData extends base.LinkEndData {

	constructor() {

		super();

		/// <summary>
		/// Specifies whether the existing links emanating from the object on this end
		/// should be destroyed before creating a new link.
		/// </summary>
		this.isReplaceAll = null;
		/**
		 * Specifies where the new link should be inserted for ordered association ends,
		 * or where an existing link should be moved to. The type of the input is
		 * UnlimitedNatural, but the input cannot be zero. This pin is omitted for
		 * association ends that are not ordered.
		 */
		this.insertAt=null;	

	}

}//end LinkEndCreationData

 module.exports = {
 	LinkEndCreationData: LinkEndCreationData
 }