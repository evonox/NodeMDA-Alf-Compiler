const base = require("./Behavior");



class OpaqueBehavior extends base.Behavior {

	constructor() {

		super();

		this.body = new Array();
		this.language = new Array();	

	}

}//end OpaqueBehavior

 module.exports = {
 	OpaqueBehavior: OpaqueBehavior
 }