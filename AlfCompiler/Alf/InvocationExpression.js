const base = require("./Expression");
const mappingMixin = require("../MappingMixins/InvocationExpression");


/// <summary>
/// An expression denoting the invocation of a behavior or operation, or the
/// sending of a signal.
/// </summary>
class InvocationExpression extends mappingMixin(base.Expression) {

	constructor() {

		super();

		/// <summary>
		/// Whether this is an association read or not.
		/// </summary>
		this.isAssociationEnd = null;
		/// <summary>
		/// Whether this is a behavior invocation or not.
		/// </summary>
		this.isBehavior = null;
		/// <summary>
		/// If this is an operation call, whether the operation is a destructor.
		/// </summary>
		this.isDestructor = null;
		/// <summary>
		/// Whether this is an implicit object destruction.
		/// </summary>
		this.isImplicit = null;
		/// <summary>
		/// Whether this is an operation call or not.
		/// </summary>
		this.isOperation = null;
		/// <summary>
		/// Whether this is a signal send or not.
		/// </summary>
		this.isSignal = null;
		/**
		 * For an invocation of a feature, the reference to that feature. This property is
		 * set for a feature invocation expression or for an expression initially parsed
		 * as a behavior invocation expression that disambiguates to a feature invocation
		 * expression.
		 */
		this.feature=null;
		/**
		 * The tuple for the invocation expression.
		 */
		this.tuple=null;
		/**
		 * The behavior, operation or signal being invoked. The derivation of this
		 * property is specific to each kind of invocation expression.
		 */
		this.referent=null;
		/**
		 * Element references to the parameters of the referent, in order.
		 */
		this.parameter=null;	

	}

	/// <summary>
	/// Returns references to the elements that act as the parameters of the referent.
	/// If the referent is a behavior or operation, these are the owned parameters, in
	/// order. If the referent is an association end, then the parameters are the other
	/// association ends of the association of the referent end, which are treated as
	/// if they were in parameters. Otherwise (by default), they are any properties of
	/// the referent (e.g., signal attributes), which are treated as if they were in
	/// parameters. (This is defined as a helper operation, so that it can be
	/// overridden by subclasses of InvocationExpression, if necessary.)
	/// </summary>
	parameterElements() {

	}

	/// <summary>
	/// The assignments after an invocation expression are the same as those after the
	/// tuple of the expression.
	/// </summary>
	updateAssignments() {

	}

}//end InvocationExpression

 module.exports = {
 	InvocationExpression: InvocationExpression
 }