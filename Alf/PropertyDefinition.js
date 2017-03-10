const base = require("./TypedElementDefinition");


/// <summary>
/// A typed element definition for a property (attribute or association end).
/// </summary>
class PropertyDefinition extends base.TypedElementDefinition {

	constructor() {

		super();

		/// <summary>
		/// Whether BitString conversion is required for the initialization of this
		/// property.
		/// </summary>
		this.isBitStringConversion = null;
		/// <summary>
		/// Whether collection conversion is required for the initialization of this
		/// property.
		/// </summary>
		this.isCollectionConversion = null;
		/// <summary>
		/// Whether the property being defined has composite aggregation.
		/// </summary>
		this.isComposite = null;
		/**
		 * The expression to be evaluated to initialize the property.
		 */
		this.initializer=null;	

	}

	/// <summary>
	/// Returns true if the annotation is for a stereotype that has a metaclass
	/// consistent with Property.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

	/// <summary>
	/// Return true if the given member is either a PropertyDefinition or an imported
	/// member whose referent is a PropertyDefinition or a Property.
	/// </summary>
	/// <param name="member">Returns true if the given member is distinguishable from
	/// this member. By default, this means that the names of the members are different.
	/// However, in any case that the UML Superstructure considers two names to be
	/// distinguishable if they are different, an Alf implementation may instead impose
	/// the stronger requirement that the names not be conflicting.</param>
	isSameKindAs(member) {

	}

}//end PropertyDefinition

 module.exports = {
 	PropertyDefinition: PropertyDefinition
 }