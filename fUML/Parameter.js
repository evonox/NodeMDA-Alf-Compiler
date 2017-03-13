const base = require("./MultiplicityElement, TypedElement");



class Parameter extends base.MultiplicityElement, TypedElement {

	constructor() {

		super();

		/// <summary>
		/// Indicates whether a parameter is being sent into or out of a behavioral element.
		/// 
		/// </summary>
		this.direction = null;	

	}

}//end Parameter

 module.exports = {
 	Parameter: Parameter
 }