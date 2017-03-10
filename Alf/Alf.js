const AcceptBlock = require("./AcceptBlock.js");
const AcceptStatement = require("./AcceptStatement.js");
const ActiveClassDefinition = require("./ActiveClassDefinition.js");
const ActivityDefinition = require("./ActivityDefinition.js");
const Annotation = require("./Annotation.js");
const ArithmeticExpression = require("./ArithmeticExpression.js");
const AssignedSource = require("./AssignedSource.js");
const AssignmentExpression = require("./AssignmentExpression.js");
const AssociationDefinition = require("./AssociationDefinition.js");
const BehaviorInvocationExpression = require("./BehaviorInvocationExpression.js");
const BinaryExpression = require("./BinaryExpression.js");
const BitStringUnaryExpression = require("./BitStringUnaryExpression.js");
const Block = require("./Block.js");
const BlockStatement = require("./BlockStatement.js");
const BooleanLiteralExpression = require("./BooleanLiteralExpression.js");
const BooleanUnaryExpression = require("./BooleanUnaryExpression.js");
const BreakStatement = require("./BreakStatement.js");
const CastExpression = require("./CastExpression.js");
const ClassDefinition = require("./ClassDefinition.js");
const ClassExtentExpression = require("./ClassExtentExpression.js");
const ClassificationExpression = require("./ClassificationExpression.js");
const ClassifierDefinition = require("./ClassifierDefinition.js");
const ClassifierTemplateParameter = require("./ClassifierTemplateParameter.js");
const ClassifyStatement = require("./ClassifyStatement.js");
const CollectOrIterateExpression = require("./CollectOrIterateExpression.js");
const ConcurrentClauses = require("./ConcurrentClauses.js");
const ConditionalLogicalExpression = require("./ConditionalLogicalExpression.js");
const ConditionalTestExpression = require("./ConditionalTestExpression.js");
const DataTypeDefinition = require("./DataTypeDefinition.js");
const DocumentedElement = require("./DocumentedElement.js");
const DoStatement = require("./DoStatement.js");
const ElementImportReference = require("./ElementImportReference.js");
const ElementReference = require("./ElementReference.js");
const EmptyStatement = require("./EmptyStatement.js");
const EnumerationDefinition = require("./EnumerationDefinition.js");
const EnumerationLiteralName = require("./EnumerationLiteralName.js");
const EqualityExpression = require("./EqualityExpression.js");
const Expression = require("./Expression.js");
const ExpressionStatement = require("./ExpressionStatement.js");
const ExtentOrExpression = require("./ExtentOrExpression.js");
const ExternalElementReference = require("./ExternalElementReference.js");
const FeatureInvocationExpression = require("./FeatureInvocationExpression.js");
const FeatureLeftHandSide = require("./FeatureLeftHandSide.js");
const FeatureReference = require("./FeatureReference.js");
const ForAllOrExistsOrOneExpression = require("./ForAllOrExistsOrOneExpression.js");
const FormalParameter = require("./FormalParameter.js");
const ForStatement = require("./ForStatement.js");
const IfStatement = require("./IfStatement.js");
const ImportedMember = require("./ImportedMember.js");
const ImportReference = require("./ImportReference.js");
const IncrementOrDecrementExpression = require("./IncrementOrDecrementExpression.js");
const InLineStatement = require("./InLineStatement.js");
const InstanceCreationExpression = require("./InstanceCreationExpression.js");
const InternalElementReference = require("./InternalElementReference.js");
const InvocationExpression = require("./InvocationExpression.js");
const IsolationExpression = require("./IsolationExpression.js");
const IsUniqueExpression = require("./IsUniqueExpression.js");
const LeftHandSide = require("./LeftHandSide.js");
const LinkOperationExpression = require("./LinkOperationExpression.js");
const LiteralExpression = require("./LiteralExpression.js");
const LocalNameDeclarationStatement = require("./LocalNameDeclarationStatement.js");
const LogicalExpression = require("./LogicalExpression.js");
const LoopVariableDefinition = require("./LoopVariableDefinition.js");
const Member = require("./Member.js");
const NameBinding = require("./NameBinding.js");
const NamedExpression = require("./NamedExpression.js");
const NamedTemplateBinding = require("./NamedTemplateBinding.js");
const NamedTuple = require("./NamedTuple.js");
const NameExpression = require("./NameExpression.js");
const NameLeftHandSide = require("./NameLeftHandSide.js");
const NamespaceDefinition = require("./NamespaceDefinition.js");
const NaturalLiteralExpression = require("./NaturalLiteralExpression.js");
const NonFinalClause = require("./NonFinalClause.js");
const NumericUnaryExpression = require("./NumericUnaryExpression.js");
const OperationDefinition = require("./OperationDefinition.js");
const OutputNamedExpression = require("./OutputNamedExpression.js");
const PackageDefinition = require("./PackageDefinition.js");
const PackageImportReference = require("./PackageImportReference.js");
const PositionalTemplateBinding = require("./PositionalTemplateBinding.js");
const PositionalTuple = require("./PositionalTuple.js");
const PropertyAccessExpression = require("./PropertyAccessExpression.js");
const PropertyDefinition = require("./PropertyDefinition.js");
const QualifiedName = require("./QualifiedName.js");
const QualifiedNameList = require("./QualifiedNameList.js");
const ReceptionDefinition = require("./ReceptionDefinition.js");
const RelationalExpression = require("./RelationalExpression.js");
const ReturnStatement = require("./ReturnStatement.js");
const SelectOrRejectExpression = require("./SelectOrRejectExpression.js");
const SequenceAccessExpression = require("./SequenceAccessExpression.js");
const SequenceConstructionExpression = require("./SequenceConstructionExpression.js");
const SequenceElements = require("./SequenceElements.js");
const SequenceExpansionExpression = require("./SequenceExpansionExpression.js");
const SequenceExpressionList = require("./SequenceExpressionList.js");
const SequenceOperationExpression = require("./SequenceOperationExpression.js");
const SequenceRange = require("./SequenceRange.js");
const SequenceReductionExpression = require("./SequenceReductionExpression.js");
const ShiftExpression = require("./ShiftExpression.js");
const SignalDefinition = require("./SignalDefinition.js");
const SignalReceptionDefinition = require("./SignalReceptionDefinition.js");
const Statement = require("./Statement.js");
const StereotypeAnnotation = require("./StereotypeAnnotation.js");
const StringLiteralExpression = require("./StringLiteralExpression.js");
const SuperInvocationExpression = require("./SuperInvocationExpression.js");
const SwitchClause = require("./SwitchClause.js");
const SwitchStatement = require("./SwitchStatement.js");
const SyntaxElement = require("./SyntaxElement.js");
const TaggedValue = require("./TaggedValue.js");
const TaggedValueList = require("./TaggedValueList.js");
const TemplateBinding = require("./TemplateBinding.js");
const TemplateParameterSubstitution = require("./TemplateParameterSubstitution.js");
const ThisExpression = require("./ThisExpression.js");
const Tuple = require("./Tuple.js");
const TypedElementDefinition = require("./TypedElementDefinition.js");
const UnaryExpression = require("./UnaryExpression.js");
const UnboundedLiteralExpression = require("./UnboundedLiteralExpression.js");
const UnitDefinition = require("./UnitDefinition.js");
const WhileStatement = require("./WhileStatement.js");

module.exports = {
	AcceptBlock: AcceptBlock,
	AcceptStatement: AcceptStatement,
	ActiveClassDefinition: ActiveClassDefinition,
	ActivityDefinition: ActivityDefinition,
	Annotation: Annotation,
	ArithmeticExpression: ArithmeticExpression,
	AssignedSource: AssignedSource,
	AssignmentExpression: AssignmentExpression,
	AssociationDefinition: AssociationDefinition,
	BehaviorInvocationExpression: BehaviorInvocationExpression,
	BinaryExpression: BinaryExpression,
	BitStringUnaryExpression: BitStringUnaryExpression,
	Block: Block,
	BlockStatement: BlockStatement,
	BooleanLiteralExpression: BooleanLiteralExpression,
	BooleanUnaryExpression: BooleanUnaryExpression,
	BreakStatement: BreakStatement,
	CastExpression: CastExpression,
	ClassDefinition: ClassDefinition,
	ClassExtentExpression: ClassExtentExpression,
	ClassificationExpression: ClassificationExpression,
	ClassifierDefinition: ClassifierDefinition,
	ClassifierTemplateParameter: ClassifierTemplateParameter,
	ClassifyStatement: ClassifyStatement,
	CollectOrIterateExpression: CollectOrIterateExpression,
	ConcurrentClauses: ConcurrentClauses,
	ConditionalLogicalExpression: ConditionalLogicalExpression,
	ConditionalTestExpression: ConditionalTestExpression,
	DataTypeDefinition: DataTypeDefinition,
	DocumentedElement: DocumentedElement,
	DoStatement: DoStatement,
	ElementImportReference: ElementImportReference,
	ElementReference: ElementReference,
	EmptyStatement: EmptyStatement,
	EnumerationDefinition: EnumerationDefinition,
	EnumerationLiteralName: EnumerationLiteralName,
	EqualityExpression: EqualityExpression,
	Expression: Expression,
	ExpressionStatement: ExpressionStatement,
	ExtentOrExpression: ExtentOrExpression,
	ExternalElementReference: ExternalElementReference,
	FeatureInvocationExpression: FeatureInvocationExpression,
	FeatureLeftHandSide: FeatureLeftHandSide,
	FeatureReference: FeatureReference,
	ForAllOrExistsOrOneExpression: ForAllOrExistsOrOneExpression,
	FormalParameter: FormalParameter,
	ForStatement: ForStatement,
	IfStatement: IfStatement,
	ImportedMember: ImportedMember,
	ImportReference: ImportReference,
	IncrementOrDecrementExpression: IncrementOrDecrementExpression,
	InLineStatement: InLineStatement,
	InstanceCreationExpression: InstanceCreationExpression,
	InternalElementReference: InternalElementReference,
	InvocationExpression: InvocationExpression,
	IsolationExpression: IsolationExpression,
	IsUniqueExpression: IsUniqueExpression,
	LeftHandSide: LeftHandSide,
	LinkOperationExpression: LinkOperationExpression,
	LiteralExpression: LiteralExpression,
	LocalNameDeclarationStatement: LocalNameDeclarationStatement,
	LogicalExpression: LogicalExpression,
	LoopVariableDefinition: LoopVariableDefinition,
	Member: Member,
	NameBinding: NameBinding,
	NamedExpression: NamedExpression,
	NamedTemplateBinding: NamedTemplateBinding,
	NamedTuple: NamedTuple,
	NameExpression: NameExpression,
	NameLeftHandSide: NameLeftHandSide,
	NamespaceDefinition: NamespaceDefinition,
	NaturalLiteralExpression: NaturalLiteralExpression,
	NonFinalClause: NonFinalClause,
	NumericUnaryExpression: NumericUnaryExpression,
	OperationDefinition: OperationDefinition,
	OutputNamedExpression: OutputNamedExpression,
	PackageDefinition: PackageDefinition,
	PackageImportReference: PackageImportReference,
	PositionalTemplateBinding: PositionalTemplateBinding,
	PositionalTuple: PositionalTuple,
	PropertyAccessExpression: PropertyAccessExpression,
	PropertyDefinition: PropertyDefinition,
	QualifiedName: QualifiedName,
	QualifiedNameList: QualifiedNameList,
	ReceptionDefinition: ReceptionDefinition,
	RelationalExpression: RelationalExpression,
	ReturnStatement: ReturnStatement,
	SelectOrRejectExpression: SelectOrRejectExpression,
	SequenceAccessExpression: SequenceAccessExpression,
	SequenceConstructionExpression: SequenceConstructionExpression,
	SequenceElements: SequenceElements,
	SequenceExpansionExpression: SequenceExpansionExpression,
	SequenceExpressionList: SequenceExpressionList,
	SequenceOperationExpression: SequenceOperationExpression,
	SequenceRange: SequenceRange,
	SequenceReductionExpression: SequenceReductionExpression,
	ShiftExpression: ShiftExpression,
	SignalDefinition: SignalDefinition,
	SignalReceptionDefinition: SignalReceptionDefinition,
	Statement: Statement,
	StereotypeAnnotation: StereotypeAnnotation,
	StringLiteralExpression: StringLiteralExpression,
	SuperInvocationExpression: SuperInvocationExpression,
	SwitchClause: SwitchClause,
	SwitchStatement: SwitchStatement,
	SyntaxElement: SyntaxElement,
	TaggedValue: TaggedValue,
	TaggedValueList: TaggedValueList,
	TemplateBinding: TemplateBinding,
	TemplateParameterSubstitution: TemplateParameterSubstitution,
	ThisExpression: ThisExpression,
	Tuple: Tuple,
	TypedElementDefinition: TypedElementDefinition,
	UnaryExpression: UnaryExpression,
	UnboundedLiteralExpression: UnboundedLiteralExpression,
	UnitDefinition: UnitDefinition,
	WhileStatement: WhileStatement
}