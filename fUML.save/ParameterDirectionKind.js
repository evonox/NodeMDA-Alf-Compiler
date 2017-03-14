const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ParameterDirectionKind");



class ParameterDirectionKind extends Object {

	constructor() {

		/// <summary>
		/// Indicates that parameter values are passed into the behavioral element by the
		/// caller.
		/// </summary>
		this.in = null;
		/// <summary>
		/// Indicates that parameter values are passed into a behavioral element by the
		/// caller and then back out to the caller from the behavioral element.
		/// </summary>
		this.inout = null;
		/// <summary>
		/// Indicates that parameter values are passed from a behavioral element out to the
		/// caller.
		/// </summary>
		this.out = null;
		/// <summary>
		/// Indicates that parameter values are passed as return values from a behavioral
		/// element back to the caller.
		/// </summary>
		this.return = null;	

	}

}//end ParameterDirectionKind

 module.exports = ParameterDirectionKind;
