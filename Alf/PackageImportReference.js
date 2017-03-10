const base = require("./ImportReference");
const mappingMixin = require("../MappingMixins/PackageImportReference");


/// <summary>
/// An import reference to a package all of whose public members are to be imported.
/// 
/// </summary>
class PackageImportReference extends mappingMixin(base.ImportReference) {

	constructor() {

		super();

	

	}

}//end PackageImportReference

 module.exports = {
 	PackageImportReference: PackageImportReference
 }