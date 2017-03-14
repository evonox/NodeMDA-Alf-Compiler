const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Operation");



class Operation extends BehavioralFeature {

	constructor() {

		super();

		/// <summary>
		/// Redefines the corresponding property from Basic to derive this information from
		/// the return result for this Operation.
		/// Specifies whether the return parameter is ordered or not, if present.
		/// </summary>
		this.isOrdered = null;
		/// <summary>
		/// Specifies whether an execution of the BehavioralFeature leaves the state of the
		/// system unchanged (isQuery=true) or whether side effects may occur
		/// (isQuery=false).
		/// </summary>
		this.isQuery = null;
		/// <summary>
		/// Redefines the corresponding property from Basic to derive this information from
		/// the return result for this Operation.
		/// Specifies whether the return parameter is unique or not, if present.
		/// </summary>
		this.isUnique = true;
		/// <summary>
		/// Redefines the corresponding property from Basic to derive this information from
		/// the return result for this Operation.
		/// Specifies the lower multiplicity of the return parameter, if present.
		/// </summary>
		this.lower = null;
		/// <summary>
		/// Redefines the corresponding property from Basic to derive this information from
		/// the return result for this Operation.
		/// Specifies the upper multiplicity of the return parameter, if present.
		/// </summary>
		this.upper = null;
		/**
		 * Redefines the corresponding property from Basic to derive this information from
		 * the return result for this Operation.
		 * Specifies the return result of the operation, if present.
		 */
		this.type=null;
		/**
		 * References the Operations that are redefined by this Operation.
		 */
		this.redefinedOperation=null;
		this.ownedParameter=null;	

	}

}//end Operation

 module.exports = Operation;
