const base = require("./Action");



class InvocationAction extends base.Action {

	constructor() {

		super();

		this.argument=null;	

	}

}//end InvocationAction

 module.exports = {
 	InvocationAction: InvocationAction
 }