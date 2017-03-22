const base = require("./SequenceExpansionExpression");
const mappingMixin = require("../MappingMixins/SelectOrRejectExpression");


/// <summary>
/// A sequence expansion expression with a select or reject operation.
/// </summary>
class SelectOrRejectExpression extends mappingMixin(base.SequenceExpansionExpression) {

	constructor() {

		super();

	

	}

}//end SelectOrRejectExpression

 module.exports = {
 	SelectOrRejectExpression: SelectOrRejectExpression
 }