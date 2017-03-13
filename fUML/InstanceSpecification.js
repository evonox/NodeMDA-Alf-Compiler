const base = require("./NamedElement");



class InstanceSpecification extends base.NamedElement {

	constructor() {

		super();

		/**
		 * The classifier or classifiers of the represented instance. If multiple
		 * classifiers are specified, the instance is classified by all of them.
		 */
		this.classifier=null;
		/**
		 * A slot giving the value or values of a structural feature of the instance. An
		 * instance specification can have one slot per structural feature of its
		 * classifiers, including inherited features. It is not necessary to model a slot
		 * for each structural feature, in which case the instance specification is a
		 * partial description.
		 */
		this.slot=null;	

	}

}//end InstanceSpecification

 module.exports = {
 	InstanceSpecification: InstanceSpecification
 }