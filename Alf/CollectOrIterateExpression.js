const base = require("./SequenceExpansionExpression");
const mappingMixin = require("../MappingMixins/CollectOrIterateExpression");


/// <summary>
/// A sequence expansion expression with a collect or iterate operation.
/// </summary>
class CollectOrIterateExpression extends mappingMixin(base.SequenceExpansionExpression) {

	constructor() {

		super();

	

	}

}//end CollectOrIterateExpression

 module.exports = {
 	CollectOrIterateExpression: CollectOrIterateExpression
 }