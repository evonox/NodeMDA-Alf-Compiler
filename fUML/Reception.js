const BehavioralFeature = require("./BehavioralFeature");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Reception");



/// <summary>
/// A reception may not be abstract.
/// </summary>
class Reception extends codeGenMixin(BehavioralFeature) {

	constructor() {

		super();

		/**
		 * The signal that this reception handles.
		 */
		this.signal=null;	

	}

}//end Reception

 module.exports = Reception;
