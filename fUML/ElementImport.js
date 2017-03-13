const base = require("./Element");



class ElementImport extends base.Element {

	constructor() {

		super();

		this.alias = null;
		this.visibility = null;
		this.importedElement=null;	

	}

}//end ElementImport

 module.exports = {
 	ElementImport: ElementImport
 }