const base = require("./Element");



class LinkEndData extends base.Element {

	constructor() {

		super();

		/**
		 * Association end for which this link-end data specifies values.
		 */
		this.end=null;
		/**
		 * Input pin that provides the specified object for the given end. This pin is
		 * omitted if the link-end data specifies an 'open' end for reading.
		 */
		this.value=null;	

	}

}//end LinkEndData

 module.exports = {
 	LinkEndData: LinkEndData
 }