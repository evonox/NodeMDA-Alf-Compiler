const base = require("./ValueSpecification");



class InstanceValue extends base.ValueSpecification {

	constructor() {

		super();

		/**
		 * The instance that is the specified value.
		 */
		this.instance=null;	

	}

}//end InstanceValue

 module.exports = {
 	InstanceValue: InstanceValue
 }