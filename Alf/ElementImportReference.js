const base = require("./ImportReference");


/// <summary>
/// An import reference to a single element to be imported into a unit.
/// </summary>
class ElementImportReference extends base.ImportReference {

	constructor() {

		super();

		/// <summary>
		/// The alias to be used as the name for the imported element in the importing
		/// unit�s namespace.
		/// </summary>
		this.alias = null;	

	}

}//end ElementImportReference

 module.exports = {
 	ElementImportReference: ElementImportReference
 }