const base = require("./SyntaxElement");


/// <summary>
/// A group of qualified names.
/// </summary>
class QualifiedNameList extends base.SyntaxElement {

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