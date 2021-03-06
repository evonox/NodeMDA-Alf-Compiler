const Classifier = require("./Classifier");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Signal");



class Signal extends codeGenMixin(Classifier) {

	constructor() {

		super();

		/**
		 * The attributes owned by the signal.
		 */
		this.ownedAttribute=null;
		this.reception=null;	

	}

}//end Signal

 module.exports = Signal;
