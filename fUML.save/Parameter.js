const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Parameter");



class Parameter extends MultiplicityElement, TypedElement {

	constructor() {

		super();

		/// <summary>
		/// Indicates whether a parameter is being sent into or out of a behavioral element.
		/// 
		/// </summary>
		this.direction = null;	

	}

}//end Parameter

 module.exports = Parameter;
