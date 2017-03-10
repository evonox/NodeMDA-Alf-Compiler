const base = require("./SequenceExpansionExpression");


/// <summary>
/// A sequence expansion expression with a forAll, exists or one operation.
/// </summary>
class ForAllOrExistsOrOneExpression extends base.SequenceExpansionExpression {

	constructor() {

		super();

	

	}

}//end ForAllOrExistsOrOneExpression

 module.exports = {
 	ForAllOrExistsOrOneExpression: ForAllOrExistsOrOneExpression
 }