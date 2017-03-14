const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ElementImport");



class ElementImport extends Element {

	constructor() {

		super();

		this.alias = null;
		this.visibility = null;
		this.importedElement=null;	

	}

}//end ElementImport

 module.exports = ElementImport;
