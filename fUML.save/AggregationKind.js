const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/AggregationKind");



class AggregationKind extends Object {

	constructor() {

		/// <summary>
		/// Indicates that the property has no aggregation.
		/// </summary>
		this.none = null;
		/// <summary>
		/// Indicates that the property has a shared aggregation.
		/// </summary>
		this.shared = null;
		/// <summary>
		/// Indicates that the property is aggregated compositely, i.e., the composite
		/// object has responsibility for the existence and storage of the composed objects
		/// (parts).
		/// </summary>
		this.composite = null;	

	}

}//end AggregationKind

 module.exports = AggregationKind;
