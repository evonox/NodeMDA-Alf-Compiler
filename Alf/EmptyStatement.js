const base = require("./Statement");
const mappingMixin = require("../MappingMixins/EmptyStatement");


/// <summary>
/// A statement that has no affect when executed.
/// </summary>
class EmptyStatement extends mappingMixin(base.Statement) {

	constructor() {

		super();

	

	}

	/// <summary>
	/// An empty statement may not have any annotations.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

}//end EmptyStatement

 module.exports = {
 	EmptyStatement: EmptyStatement
 }