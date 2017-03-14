const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Class");



/// <summary>
/// Only an active class may specialize an active class.
/// Only an abstract class may have abstract behavioral features.
/// </summary>
class Class extends BehavioredClassifier {

	constructor() {

		super();

		/// <summary>
		/// Determines whether an object specified by this class is active or not. If true,
		/// then the owning class is referred to as an active class. If false, then such a
		/// class is referred to as a passive class.
		/// </summary>
		this.isActive = null;
		this.isID = null;
		this.nestedClassifier=null;
		/**
		 * The operations owned by the class.
		 */
		this.ownedOperation=null;
		/**
		 * This gives the superclasses of a class.
		 */
		this.superClass=null;
		/**
		 * Receptions that objects of this class are willing to accept.
		 */
		this.ownedReception=null;
		this.ownedAttribute=null;	

	}

}//end Class

 module.exports = Class;
