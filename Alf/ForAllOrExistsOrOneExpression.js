const base = require("./SequenceExpansionExpression");
const mappingMixin = require("../MappingMixins/ForAllOrExistsOrOneExpression");


/// <summary>
/// A sequence expansion expression with a forAll, exists or one operation.
/// </summary>
class ForAllOrExistsOrOneExpression extends mappingMixin(base.SequenceExpansionExpression) {

	constructor() {

		super();

	

	}

}//end ForAllOrExistsOrOneExpression

 module.exports = {
 	ForAllOrExistsOrOneExpression: ForAllOrExistsOrOneExpression
 }