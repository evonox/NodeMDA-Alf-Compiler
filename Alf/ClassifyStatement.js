const base = require("./Statement");


/// <summary>
/// A statement that changes the classification of an object.
/// </summary>
class ClassifyStatement extends base.Statement {

	constructor() {

		super();

		/// <summary>
		/// Whether this classify statement reclassifies all types of the target object.
		/// </summary>
		this.isReclassifyAll = null;
		/**
		 * A list of names of classes to be added as types of the object.
		 */
		this.toList=null;
		/**
		 * A list of names of classes to be removed as types of the object.
		 */
		this.fromList=null;
		/**
		 * The classes denoted by the names in the to list.
		 */
		this.toClass=null;
		/**
		 * The expression to be evaluated to obtain the object to be reclassified.
		 */
		this.expression=null;
		/**
		 * The classes denoted by the names in the from list.
		 */
		this.fromClass=null;	

	}

}//end ClassifyStatement

 module.exports = {
 	ClassifyStatement: ClassifyStatement
 }