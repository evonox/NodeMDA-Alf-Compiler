const base = require("./ActivityEdge");



class ObjectFlow extends base.ActivityEdge {

	constructor() {

		super();

		this.decisionNode=null;	

	}

}//end ObjectFlow

 module.exports = {
 	ObjectFlow: ObjectFlow
 }