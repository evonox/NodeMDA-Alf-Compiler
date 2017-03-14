const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/VisibilityKind");



class VisibilityKind extends Object {

	constructor() {

		this.public = null;
		this.private = null;
		this.protected = null;
		this.package = null;	

	}

}//end VisibilityKind

 module.exports = VisibilityKind;
