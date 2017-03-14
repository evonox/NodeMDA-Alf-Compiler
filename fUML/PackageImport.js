const Element = require("./Element");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/PackageImport");



class PackageImport extends codeGenMixin(Element) {

	constructor() {

		super();

		this.visibility = null;
		this.importedPackage=null;	

	}

}//end PackageImport

 module.exports = PackageImport;
