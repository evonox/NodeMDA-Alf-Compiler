const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/DataType");



class DataType extends Classifier {

	constructor() {

		super();

		/**
		 * The Attributes owned by the DataType.
		 */
		this.ownedAttribute=null;	

	}

}//end DataType

 module.exports = DataType;
