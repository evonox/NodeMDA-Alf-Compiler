const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/InstanceValue");



class InstanceValue extends ValueSpecification {

	constructor() {

		super();

		/**
		 * The instance that is the specified value.
		 */
		this.instance=null;	

	}

}//end InstanceValue

 module.exports = InstanceValue;
