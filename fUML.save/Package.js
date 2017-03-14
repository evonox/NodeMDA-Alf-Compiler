const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Package");



class Package extends PackageableElement, Namespace {

	constructor() {

		super();

		this.URI = null;
		this.nestedPackage=null;
		this.ownedType=null;
		this.packagedElement=null;	

	}

}//end Package

 module.exports = Package;
