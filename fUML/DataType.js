const base = require("./Classifier");



class DataType extends base.Classifier {

	constructor() {

		super();

		/**
		 * The Attributes owned by the DataType.
		 */
		this.ownedAttribute=null;	

	}

}//end DataType

 module.exports = {
 	DataType: DataType
 }