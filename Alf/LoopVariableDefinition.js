const base = require("./SyntaxElement");
const mappingMixin = require("../MappingMixins/LoopVariableDefinition");


/// <summary>
/// The definition of a loop variable in a for statement.
/// </summary>
class LoopVariableDefinition extends mappingMixin(base.SyntaxElement) {

	constructor() {

		super();

		/// <summary>
		/// Whether collection conversion is required.
		/// </summary>
		this.isCollectionConversion = null;
		/// <summary>
		/// Whether this definition is the first in the list of definitions in the
		/// enclosing for statement.
		/// </summary>
		this.isFirst = null;
		/// <summary>
		/// Whether the type of the variable is inferred or declared explicitly. NOTE: This
		/// flag is necessary to because a variable that is explicitly declared to have
		/// type "any" will have an empty typeName, just like a variable whose type is to
		/// be inferred, but, in the former case, the type is actually intended to be empty,
		/// not inferred.
		/// </summary>
		this.typeIsInferred = true;
		/// <summary>
		/// The name of the loop variable.
		/// </summary>
		this.variable = null;
		/**
		 * If there is only one expression, then this expression is evaluated to produce a
		 * sequence of values to be assigned to the loop variable on successive iterations.
		 * Otherwise it is evaluated to provide the first value of a range of values to be
		 * assigned to the loop variable.
		 */
		this.expression1=null;
		/**
		 * The declared type of the loop variable.
		 */
		this.typeName=null;
		/**
		 * The declared or inferred type of the loop variable.
		 */
		this.type=null;
		/**
		 * The assigned sources for local names available lexically after this loop
		 * variable definition. This includes not only any assignments made within the
		 * statement, but also any assignments that are unchanged from before the
		 * statement.
		 */
		this.assignmentAfter=null;
		/**
		 * The assigned sources for local names available lexically before this loop
		 * variable definition.
		 */
		this.assignmentBefore=null;
		/**
		 * The expression to be evaluated to give the second value in a range of values to
		 * be assigned to the loop variable.
		 */
		this.expression2=null;	

	}

}//end LoopVariableDefinition

 module.exports = {
 	LoopVariableDefinition: LoopVariableDefinition
 }