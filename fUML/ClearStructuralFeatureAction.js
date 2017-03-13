const base = require("./StructuralFeatureAction");



class ClearStructuralFeatureAction extends base.StructuralFeatureAction {

	constructor() {

		super();

		this.result=null;	

	}

}//end ClearStructuralFeatureAction

 module.exports = {
 	ClearStructuralFeatureAction: ClearStructuralFeatureAction
 }