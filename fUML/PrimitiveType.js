const DataType = require("./DataType");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/PrimitiveType");



class PrimitiveType extends codeGenMixin(DataType) {

	constructor() {

		super();

	

	}

}//end PrimitiveType

 module.exports = PrimitiveType;
