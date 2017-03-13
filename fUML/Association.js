const base = require("./Classifier");



class Association extends base.Classifier {

	constructor() {

		super();

		/// <summary>
		/// Specifies whether the association is derived from other model elements such as
		/// other associations or constraints.
		/// </summary>
		this.isDerived = null;
		/**
		 * The ends that are owned by the association itself. This is an ordered
		 * association.
		 * The ends that are owned by the association itself.
		 */
		this.ownedEnd=null;
		/**
		 * Each end represents participation of instances of the classifier connected to
		 * the end in links of the association. This is an ordered association.
		 * Each end represents participation of instances of the classifier connected to
		 * the end in links of the association.
		 */
		this.memberEnd=null;
		/**
		 * References the classifiers that are used as types of the ends of the
		 * association.
		 */
		this.endType=null;
		/**
		 * The navigable ends that are owned by the association itself.
		 */
		this.navigableOwnedEnd=null;	

	}

}//end Association

 module.exports = {
 	Association: Association
 }