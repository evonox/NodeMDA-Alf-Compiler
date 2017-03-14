const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/PackageableElement");



class PackageableElement extends NamedElement {

	constructor() {

		super();

		this.visibility = null;	

	}

}//end PackageableElement

 module.exports = PackageableElement;
