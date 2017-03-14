const Pin = require("./Pin");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/OutputPin");



class OutputPin extends codeGenMixin(Pin) {

	constructor() {

		super();

	

	}

}//end OutputPin

 module.exports = OutputPin;
