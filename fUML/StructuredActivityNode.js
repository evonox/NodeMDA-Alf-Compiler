const base = require("./Action");



/// <summary>
/// import fUML.Syntax.Activities.IntermediateActivities.*;
/// import fUML.Syntax.Actions.BasicActions.*;
/// </summary>
class StructuredActivityNode extends base.Action {

	constructor() {

		super();

		/// <summary>
		/// If true, then the actions in the node execute in isolation from actions outside
		/// the node.
		/// </summary>
		this.mustIsolate = null;
		this.structuredNodeInput=null;
		this.structuredNodeOutput=null;
		/**
		 * Edges immediately contained in the structured node.
		 */
		this.edge=null;
		/**
		 * Nodes immediately contained in the group.
		 */
		this.node=null;	

	}

}//end StructuredActivityNode

 module.exports = {
 	StructuredActivityNode: StructuredActivityNode
 }