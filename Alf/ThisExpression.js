const base = require("./Expression");
const mappingMixin = require("../MappingMixins/ThisExpression");


/// <summary>
/// An expression comprising the keyword “this”.
/// </summary>
class ThisExpression extends mappingMixin(base.Expression) {

	constructor() {

		super();

	

	}

}//end ThisExpression

 module.exports = {
 	ThisExpression: ThisExpression
 }