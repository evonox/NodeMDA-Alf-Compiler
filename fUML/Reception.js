const base = require("./BehavioralFeature");



/// <summary>
/// A reception may not be abstract.
/// </summary>
class Reception extends base.BehavioralFeature {

	constructor() {

		super();

		/**
		 * The signal that this reception handles.
		 */
		this.signal=null;	

	}

}//end Reception

 module.exports = {
 	Reception: Reception
 }