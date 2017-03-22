const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/SequenceElements");


/// <summary>
/// A specification of the elements of a sequence.
/// </summary>
class SequenceElements extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/// <summary>
		/// The multiplicity lower bound of the elements of the sequence. The derivation
		/// for this property is given in the subclasses of SequenceElements.
		/// </summary>
		this.lower = null;
		/// <summary>
		/// The multiplicity upper bound of the elements of the sequence. The derivation
		/// for this property is given in the subclasses of SequenceElements.
		/// </summary>
		this.upper = null;	

	}

}//end SequenceElements

 module.exports = {
 	SequenceElements: SequenceElements
 }