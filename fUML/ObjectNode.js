const TypedElement = require("./TypedElement");
const ActivityNode = require("./ActivityNode");
const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ObjectNode");



class ObjectNode extends codeGenMixin(mixin(TypedElement, ActivityNode)) {

	constructor() {

		super();

	

	}

}//end ObjectNode

 module.exports = ObjectNode;
