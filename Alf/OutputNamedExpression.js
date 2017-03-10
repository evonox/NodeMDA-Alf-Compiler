const base = require("./NamedExpression");
const mappingMixin = require("../MappingMixins/OutputNamedExpression");


/// <summary>
/// A named argument expression for an output parameter.
/// </summary>
class OutputNamedExpression extends mappingMixin(base.NamedExpression) {

	constructor() {

		super();

		/**
		 * The argument expression considered as an assignment left-hand side.
		 */
		this.leftHandSide=null;	

	}

}//end OutputNamedExpression

 module.exports = {
 	OutputNamedExpression: OutputNamedExpression
 }