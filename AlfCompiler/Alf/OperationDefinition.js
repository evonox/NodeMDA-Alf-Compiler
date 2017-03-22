const base = require("./NamespaceDefinition");
const mappingMixin = require("../MappingMixins/OperationDefinition");


/// <summary>
/// The definition of an operation, with any formal parameters defined as owned
/// members.
/// </summary>
class OperationDefinition extends mappingMixin(base.NamespaceDefinition) {

	constructor() {

		super();

		/// <summary>
		/// Whether the operation being defined is abstract.
		/// </summary>
		this.isAbstract = null;
		/// <summary>
		/// Whether this operation definition is for a constructor.
		/// </summary>
		this.isConstructor = null;
		/// <summary>
		/// Whether this operation definition is for a destructor.
		/// </summary>
		this.isDestructor = null;
		/**
		 * The names of other operations that are redefined by the operation being defined.
		 */
		this.redefinition=null;
		this.redefinedOperation=null;
		/**
		 * The sequence of statements that defines the behavior of the operation (empty
		 * for a stub).
		 */
		this.body=null;	

	}

	/// <summary>
	/// Returns true if the annotation is for a stereotype that has a metaclass
	/// consistent with Operation.
	/// </summary>
	/// <param name="annotation"></param>
	annotationAllowed(annotation) {

	}

	/// <summary>
	/// Return true if the given member is either an OperationDefinition or an imported
	/// member whose referent is an OperationDefinition or an Operation, and the formal
	/// parameters of this operation definition match, in order, the parameters of the
	/// other operation definition or operation. In this context, matching means the
	/// same name and type (per UML Superstructure, Subclause 7.3.5). A constructor
	/// operation without an explicit return parameter is considered to implicitly have
	/// a return parameter, following any other formal parameters, of the same type as
	/// the owner of the constructor operation.
	/// </summary>
	/// <param name="member">Returns true if the given member is distinguishable from
	/// this member. By default, this means that the names of the members are different.
	/// However, in any case that the UML Superstructure considers two names to be
	/// distinguishable if they are different, an Alf implementation may instead impose
	/// the stronger requirement that the names not be conflicting.</param>
	isSameKindAs(member) {

	}

	/// <summary>
	/// The namespace definition associated with the given unit definition must be an
	/// activity definition with no template parameters. In addition, the subunit
	/// definition must have formal parameters that match each of the formal parameters
	/// of the stub definition, in order. Two formal parameters match if they have the
	/// same direction, name, multiplicity bounds, ordering, uniqueness and type
	/// reference If this operation definition is a constructor, then it is considered
	/// to have an implicit return parameter, following any other formal parameters,
	/// with the same type as the class of the operation definition and a multiplicity
	/// of 1..1.
	/// </summary>
	/// <param name="unit"></param>
	matchForStub(unit) {

	}

}//end OperationDefinition

 module.exports = {
 	OperationDefinition: OperationDefinition
 }