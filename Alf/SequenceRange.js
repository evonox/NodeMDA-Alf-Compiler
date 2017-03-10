const base = require("./SequenceElements");


/// <summary>
/// A specification of the elements of a sequence as a range of integers.
/// </summary>
class SequenceRange extends base.SequenceElements {

	constructor() {

		super();

		/**
		 * The expression whose value gives the lower bound for the range.
		 */
		this.rangeLower=null;
		/**
		 * The expression whose value gives the upper bound for the range.
		 */
		this.rangeUpper=null;	

	}

}//end SequenceRange

 module.exports = {
 	SequenceRange: SequenceRange
 }