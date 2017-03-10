const base = require("./LeftHandSide");
const mappingMixin = require("../MappingMixins/NameLeftHandSide");


/// <summary>
/// A left-hand side that is a name.
/// </summary>
class NameLeftHandSide extends mappingMixin(base.LeftHandSide) {

	constructor() {

		super();

		/**
		 * The name that is the target of the assignment.
		 */
		this.target=null;	

	}

}//end NameLeftHandSide

 module.exports = {
 	NameLeftHandSide: NameLeftHandSide
 }