const Pin = require("./Pin");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/InputPin");



class InputPin extends codeGenMixin(Pin) {

	constructor() {

		super();

	

	}

}//end InputPin

 module.exports = InputPin;
