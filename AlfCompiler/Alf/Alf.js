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
	AcceptBlock: AcceptBlock.AcceptBlock,
	AcceptStatement: AcceptStatement.AcceptStatement,
	ActiveClassDefinition: ActiveClassDefinition.ActiveClassDefinition,
	ActivityDefinition: ActivityDefinition.ActivityDefinition,
	Annotation: Annotation.Annotation,
	ArithmeticExpression: ArithmeticExpression.ArithmeticExpression,
	AssignedSource: AssignedSource.AssignedSource,
	AssignmentExpression: AssignmentExpression.AssignmentExpression,
	AssociationDefinition: AssociationDefinition.AssociationDefinition,
	BehaviorInvocationExpression: BehaviorInvocationExpression.BehaviorInvocationExpression,
	BinaryExpression: BinaryExpression.BinaryExpression,
	BitStringUnaryExpression: BitStringUnaryExpression.BitStringUnaryExpression,
	Block: Block.Block,
	BlockStatement: BlockStatement.BlockStatement,
	BooleanLiteralExpression: BooleanLiteralExpression.BooleanLiteralExpression,
	BooleanUnaryExpression: BooleanUnaryExpression.BooleanUnaryExpression,
	BreakStatement: BreakStatement.BreakStatement,
	CastExpression: CastExpression.CastExpression,
	ClassDefinition: ClassDefinition.ClassDefinition,
	ClassExtentExpression: ClassExtentExpression.ClassExtentExpression,
	ClassificationExpression: ClassificationExpression.ClassificationExpression,
	ClassifierDefinition: ClassifierDefinition.ClassifierDefinition,
	ClassifierTemplateParameter: ClassifierTemplateParameter.ClassifierTemplateParameter,
	ClassifyStatement: ClassifyStatement.ClassifyStatement,
	CollectOrIterateExpression: CollectOrIterateExpression.CollectOrIterateExpression,
	ConcurrentClauses: ConcurrentClauses.ConcurrentClauses,
	ConditionalLogicalExpression: ConditionalLogicalExpression.ConditionalLogicalExpression,
	ConditionalTestExpression: ConditionalTestExpression.ConditionalTestExpression,
	DataTypeDefinition: DataTypeDefinition.DataTypeDefinition,
	DocumentedElement: DocumentedElement.DocumentedElement,
	DoStatement: DoStatement.DoStatement,
	ElementImportReference: ElementImportReference.ElementImportReference,
	ElementReference: ElementReference.ElementReference,
	EmptyStatement: EmptyStatement.EmptyStatement,
	EnumerationDefinition: EnumerationDefinition.EnumerationDefinition,
	EnumerationLiteralName: EnumerationLiteralName.EnumerationLiteralName,
	EqualityExpression: EqualityExpression.EqualityExpression,
	Expression: Expression.Expression,
	ExpressionStatement: ExpressionStatement.ExpressionStatement,
	ExtentOrExpression: ExtentOrExpression.ExtentOrExpression,
	ExternalElementReference: ExternalElementReference.ExternalElementReference,
	FeatureInvocationExpression: FeatureInvocationExpression.FeatureInvocationExpression,
	FeatureLeftHandSide: FeatureLeftHandSide.FeatureLeftHandSide,
	FeatureReference: FeatureReference.FeatureReference,
	ForAllOrExistsOrOneExpression: ForAllOrExistsOrOneExpression.ForAllOrExistsOrOneExpression,
	FormalParameter: FormalParameter.FormalParameter,
	ForStatement: ForStatement.ForStatement,
	IfStatement: IfStatement.IfStatement,
	ImportedMember: ImportedMember.ImportedMember,
	ImportReference: ImportReference.ImportReference,
	IncrementOrDecrementExpression: IncrementOrDecrementExpression.IncrementOrDecrementExpression,
	InLineStatement: InLineStatement.InLineStatement,
	InstanceCreationExpression: InstanceCreationExpression.InstanceCreationExpression,
	InternalElementReference: InternalElementReference.InternalElementReference,
	InvocationExpression: InvocationExpression.InvocationExpression,
	IsolationExpression: IsolationExpression.IsolationExpression,
	IsUniqueExpression: IsUniqueExpression.IsUniqueExpression,
	LeftHandSide: LeftHandSide.LeftHandSide,
	LinkOperationExpression: LinkOperationExpression.LinkOperationExpression,
	LiteralExpression: LiteralExpression.LiteralExpression,
	LocalNameDeclarationStatement: LocalNameDeclarationStatement.LocalNameDeclarationStatement,
	LogicalExpression: LogicalExpression.LogicalExpression,
	LoopVariableDefinition: LoopVariableDefinition.LoopVariableDefinition,
	Member: Member.Member,
	NameBinding: NameBinding.NameBinding,
	NamedExpression: NamedExpression.NamedExpression,
	NamedTemplateBinding: NamedTemplateBinding.NamedTemplateBinding,
	NamedTuple: NamedTuple.NamedTuple,
	NameExpression: NameExpression.NameExpression,
	NameLeftHandSide: NameLeftHandSide.NameLeftHandSide,
	NamespaceDefinition: NamespaceDefinition.NamespaceDefinition,
	NaturalLiteralExpression: NaturalLiteralExpression.NaturalLiteralExpression,
	NonFinalClause: NonFinalClause.NonFinalClause,
	NumericUnaryExpression: NumericUnaryExpression.NumericUnaryExpression,
	OperationDefinition: OperationDefinition.OperationDefinition,
	OutputNamedExpression: OutputNamedExpression.OutputNamedExpression,
	PackageDefinition: PackageDefinition.PackageDefinition,
	PackageImportReference: PackageImportReference.PackageImportReference,
	PositionalTemplateBinding: PositionalTemplateBinding.PositionalTemplateBinding,
	PositionalTuple: PositionalTuple.PositionalTuple,
	PropertyAccessExpression: PropertyAccessExpression.PropertyAccessExpression,
	PropertyDefinition: PropertyDefinition.PropertyDefinition,
	QualifiedName: QualifiedName.QualifiedName,
	QualifiedNameList: QualifiedNameList.QualifiedNameList,
	ReceptionDefinition: ReceptionDefinition.ReceptionDefinition,
	RelationalExpression: RelationalExpression.RelationalExpression,
	ReturnStatement: ReturnStatement.ReturnStatement,
	SelectOrRejectExpression: SelectOrRejectExpression.SelectOrRejectExpression,
	SequenceAccessExpression: SequenceAccessExpression.SequenceAccessExpression,
	SequenceConstructionExpression: SequenceConstructionExpression.SequenceConstructionExpression,
	SequenceElements: SequenceElements.SequenceElements,
	SequenceExpansionExpression: SequenceExpansionExpression.SequenceExpansionExpression,
	SequenceExpressionList: SequenceExpressionList.SequenceExpressionList,
	SequenceOperationExpression: SequenceOperationExpression.SequenceOperationExpression,
	SequenceRange: SequenceRange.SequenceRange,
	SequenceReductionExpression: SequenceReductionExpression.SequenceReductionExpression,
	ShiftExpression: ShiftExpression.ShiftExpression,
	SignalDefinition: SignalDefinition.SignalDefinition,
	SignalReceptionDefinition: SignalReceptionDefinition.SignalReceptionDefinition,
	Statement: Statement.Statement,
	StereotypeAnnotation: StereotypeAnnotation.StereotypeAnnotation,
	StringLiteralExpression: StringLiteralExpression.StringLiteralExpression,
	SuperInvocationExpression: SuperInvocationExpression.SuperInvocationExpression,
	SwitchClause: SwitchClause.SwitchClause,
	SwitchStatement: SwitchStatement.SwitchStatement,
	SyntaxElement: SyntaxElement.SyntaxElement,
	TaggedValue: TaggedValue.TaggedValue,
	TaggedValueList: TaggedValueList.TaggedValueList,
	TemplateBinding: TemplateBinding.TemplateBinding,
	TemplateParameterSubstitution: TemplateParameterSubstitution.TemplateParameterSubstitution,
	ThisExpression: ThisExpression.ThisExpression,
	Tuple: Tuple.Tuple,
	TypedElementDefinition: TypedElementDefinition.TypedElementDefinition,
	UnaryExpression: UnaryExpression.UnaryExpression,
	UnboundedLiteralExpression: UnboundedLiteralExpression.UnboundedLiteralExpression,
	UnitDefinition: UnitDefinition.UnitDefinition,
	WhileStatement: WhileStatement.WhileStatement
}