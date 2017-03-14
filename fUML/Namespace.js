const NamedElement = require("./NamedElement");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Namespace");



class Namespace extends codeGenMixin(NamedElement) {

	constructor() {
		super();
		
		this.importedMember=null;
		this.packageImport=null;
		this.elementImport=null;
		this.ownedMember=null;
		this.member=null;	

	}

}//end Namespace

 module.exports = Namespace;
