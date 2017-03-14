const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/CallConcurrencyKind");



class CallConcurrencyKind extends Object {

	constructor() {

		this.sequential = null;	

	}

}//end CallConcurrencyKind

 module.exports = CallConcurrencyKind;
