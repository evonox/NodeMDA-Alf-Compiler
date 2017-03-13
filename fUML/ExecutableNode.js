const base = require("./ActivityNode");



class ExecutableNode extends base.ActivityNode {

	constructor() {

		super();

		this.loopNode=null;
		this.clause=null;	

	}

}//end ExecutableNode

 module.exports = {
 	ExecutableNode: ExecutableNode
 }