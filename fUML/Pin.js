const MultiplicityElement = require("./MultiplicityElement");
const ObjectNode = require("./ObjectNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Pin");



class Pin extends codeGenMixin(mixin(MultiplicityElement, ObjectNode)) {

	constructor() {

		super();

	

	}

}//end Pin

 module.exports = Pin;
