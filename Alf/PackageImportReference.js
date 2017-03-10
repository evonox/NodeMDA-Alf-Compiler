const base = require("./ImportReference");


/// <summary>
/// An import reference to a package all of whose public members are to be imported.
/// 
/// </summary>
class PackageImportReference extends base.ImportReference {

	constructor() {

		super();

	

	}

}//end PackageImportReference

 module.exports = {
 	PackageImportReference: PackageImportReference
 }