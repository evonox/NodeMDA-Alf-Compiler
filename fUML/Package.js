const PackageableElement = require("./PackageableElement");
const Namespace = require("./Namespace");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Package");



class Package extends codeGenMixin(mixin(PackageableElement, new Namespace())) {

	constructor() {
		super();


		this.URI = null;
		this.nestedPackage=null;
		this.ownedType=null;
		this.packagedElement=null;	

	}

}//end Package

 module.exports = Package;
