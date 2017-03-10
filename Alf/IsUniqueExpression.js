const base = require("./SequenceExpansionExpression");
const mappingMixin = require("../MappingMixins/IsUniqueExpression");


/// <summary>
/// A sequence expansion expression with a isUnique.
/// </summary>
class IsUniqueExpression extends mappingMixin(base.SequenceExpansionExpression) {

	constructor() {

		super();

	

	}

}//end IsUniqueExpression

 module.exports = {
 	IsUniqueExpression: IsUniqueExpression
 }