
const mappingMixin = require("../MappingMixins/SyntaxElement");


/// <summary>
/// A syntax element synthesized in an abstract syntax tree, along with any
/// additional information determined during static semantic analysis.
/// </summary>
class SyntaxElement extends mappingMixin(Object) {

	constructor() {

	

	}

}//end SyntaxElement

 module.exports = {
 	SyntaxElement: SyntaxElement
 }