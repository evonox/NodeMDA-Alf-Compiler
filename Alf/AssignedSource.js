

/// <summary>
/// An assignment of a source element that gives the value of a local name, along
/// with a record of the defined type (if any) and multiplicity of the local name.
/// </summary>
class AssignedSource  {

	constructor() {

		/// <summary>
		/// The multiplicity lower bound for the name.
		/// </summary>
		this.lower = null;
		/// <summary>
		/// The local name for which this is the assigned source.
		/// </summary>
		this.name = null;
		/// <summary>
		/// The multiplicity upper bound for the local name.
		/// </summary>
		this.upper = null;
		/**
		 * The syntax element that is to be the source for the assigned value of the given
		 * local name.
		 */
		this.source=null;
		/**
		 * A reference to the element that gives the type for the local name (if any).
		 */
		this.type=null;	

	}

}//end AssignedSource

 module.exports = {
 	AssignedSource: AssignedSource
 }