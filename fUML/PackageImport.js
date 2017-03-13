const base = require("./Element");



class PackageImport extends base.Element {

	constructor() {

		super();

		this.visibility = null;
		this.importedPackage=null;	

	}

}//end PackageImport

 module.exports = {
 	PackageImport: PackageImport
 }