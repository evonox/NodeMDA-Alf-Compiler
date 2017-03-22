const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/QualifiedNameList");


/// <summary>
/// A group of qualified names.
/// </summary>
class QualifiedNameList extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/**
		 * The names in the group.
		 */
		this.name=null;	

	}

}//end QualifiedNameList

 module.exports = {
 	QualifiedNameList: QualifiedNameList
 }