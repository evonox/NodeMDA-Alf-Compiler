const Event = require("./Event");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/MessageEvent");



class MessageEvent extends codeGenMixin(Event) {

	constructor() {

		super();

	

	}

}//end MessageEvent

 module.exports = MessageEvent;
