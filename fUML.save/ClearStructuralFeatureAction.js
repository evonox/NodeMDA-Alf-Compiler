const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/ClearStructuralFeatureAction");



class ClearStructuralFeatureAction extends StructuralFeatureAction {

	constructor() {

		super();

		this.result=null;	

	}

}//end ClearStructuralFeatureAction

 module.exports = ClearStructuralFeatureAction;
