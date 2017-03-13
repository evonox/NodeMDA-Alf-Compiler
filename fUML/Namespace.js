const base = require("./NamedElement");



class Namespace extends base.NamedElement {

	constructor() {

		super();

		this.importedMember=null;
		this.packageImport=null;
		this.elementImport=null;
		this.ownedMember=null;
		this.member=null;	

	}

}//end Namespace

 module.exports = {
 	Namespace: Namespace
 }