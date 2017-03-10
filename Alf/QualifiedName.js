const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/QualifiedName");


/// <summary>
/// The representation of a qualified name as a sequence of individual simple names.
/// 
/// </summary>
class QualifiedName extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/// <summary>
		/// Whether this qualified name is ambiguous.
		/// </summary>
		this.isAmbiguous = null;
		/// <summary>
		/// Indicates whether this qualified name has been disambiguated to a feature
		/// reference.
		/// </summary>
		this.isFeatureReference = null;
		/// <summary>
		/// The complete path name for the qualified name, with individual name bindings
		/// separated by "::" punctuation.
		/// </summary>
		this.pathName = null;
		/**
		 * The disambiguation into a feature reference of a syntactic element initially
		 * parsed as a qualified name.
		 */
		this.disambiguation=null;
		/**
		 * The sequence of individual name bindings in this qualified name.
		 */
		this.nameBinding=null;
		/**
		 * The rightmost individual name binding in the qualified name, without the
		 * qualification.
		 */
		this.unqualifiedName=null;
		/**
		 * The qualified name corresponding to the qualification part of this qualified
		 * name, if any.
		 */
		this.qualification=null;
		/**
		 * If this qualified name is for a template binding, then the name of the template
		 * for which this qualified name is a binding.
		 */
		this.templateName=null;
		/**
		 * The possible referents to which this qualified name may resolve. (Note that the
		 * UML rules for namespaces in general allow a namespace to contain elements of
		 * different kinds with the same name.) If the qualified name is for a template
		 * instantiation, then the referent is the equivalent bound element.
		 */
		this.referent=null;	

	}

}//end QualifiedName

 module.exports = {
 	QualifiedName: QualifiedName
 }