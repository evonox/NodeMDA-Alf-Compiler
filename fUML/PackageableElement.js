const base = require("./NamedElement");



class PackageableElement extends base.NamedElement {

	constructor() {

		super();

		this.visibility = null;	

	}

}//end PackageableElement

 module.exports = {
 	PackageableElement: PackageableElement
 }