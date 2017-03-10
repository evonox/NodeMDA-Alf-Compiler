const base = require("./Statement");
const mappingMixin = require("../MappingMixins/InLineStatement");


/// <summary>
/// A statement that executes code in a language other than Alf.
/// </summary>
class InLineStatement extends mappingMixin(base.Statement) {

	constructor() {

		super();

		/// <summary>
		/// The in-line code to be executed.
		/// </summary>
		this.code = null;
		/// <summary>
		/// The name of the language in which the code is written.
		/// </summary>
		this.language = null;	

	}

}//end InLineStatement

 module.exports = {
 	InLineStatement: InLineStatement
 }