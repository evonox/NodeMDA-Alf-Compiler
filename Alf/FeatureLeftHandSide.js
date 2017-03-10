const base = require("./LeftHandSide");


/// <summary>
/// A left-hand side that is a property reference.
/// </summary>
class FeatureLeftHandSide extends base.LeftHandSide {

	constructor() {

		super();

		/**
		 * The structural feature being assigned.
		 */
		this.feature=null;	

	}

}//end FeatureLeftHandSide

 module.exports = {
 	FeatureLeftHandSide: FeatureLeftHandSide
 }