const base = require("./BinaryExpression");
const mappingMixin = require("../MappingMixins/RelationalExpression");


/// <summary>
/// A binary expression with a relational operator.
/// </summary>
class RelationalExpression extends mappingMixin(base.BinaryExpression) {

	constructor() {

		super();

		/// <summary>
		/// Whether this is an UnlimitedNatural comparison.
		/// </summary>
		this.isUnlimitedNatural = null;	

	}

}//end RelationalExpression

 module.exports = {
 	RelationalExpression: RelationalExpression
 }