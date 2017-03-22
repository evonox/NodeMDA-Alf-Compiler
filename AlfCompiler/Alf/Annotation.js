const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/Annotation");


/// <summary>
/// An identified modification to the behavior of an annotated statement.
/// </summary>
class Annotation extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/// <summary>
		/// If permitted by the annotation, an optional list of local names relevant to the
		/// annotation.
		/// </summary>
		this.argument = new Array();
		/// <summary>
		/// The name of the annotation.
		/// </summary>
		this.identifier = null;	

	}

}//end Annotation

 module.exports = {
 	Annotation: Annotation
 }