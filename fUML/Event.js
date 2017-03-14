const PackageableElement = require("./PackageableElement");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Event");



class Event extends codeGenMixin(PackageableElement) {

	constructor() {

		super();

	

	}

}//end Event

 module.exports = Event;
