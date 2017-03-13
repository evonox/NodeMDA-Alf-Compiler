const base = require("./PackageableElement, Namespace");



class Package extends base.PackageableElement, Namespace {

	constructor() {

		super();

		this.URI = null;
		this.nestedPackage=null;
		this.ownedType=null;
		this.packagedElement=null;	

	}

}//end Package

 module.exports = {
 	Package: Package
 }