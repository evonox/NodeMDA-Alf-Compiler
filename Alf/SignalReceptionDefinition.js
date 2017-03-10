const base = require("./SignalDefinition");
const mappingMixin = require("../MappingMixins/SignalReceptionDefinition");


/// <summary>
/// The definition of both a signal and a reception of that signal as a feature of
/// the containing active class.
/// </summary>
class SignalReceptionDefinition extends mappingMixin(base.SignalDefinition) {

	constructor() {

		super();

	

	}

}//end SignalReceptionDefinition

 module.exports = {
 	SignalReceptionDefinition: SignalReceptionDefinition
 }