const AcceptEventAction = require("./AcceptEventAction.js");
const Action = require("./Action.js");
const Activity = require("./Activity.js");
const ActivityEdge = require("./ActivityEdge.js");
const ActivityFinalNode = require("./ActivityFinalNode.js");
const ActivityNode = require("./ActivityNode.js");
const ActivityParameterNode = require("./ActivityParameterNode.js");
const AddStructuralFeatureValueAction = require("./AddStructuralFeatureValueAction.js");
const AggregationKind = require("./AggregationKind.js");
const Association = require("./Association.js");
const Behavior = require("./Behavior.js");
const BehavioralFeature = require("./BehavioralFeature.js");
const BehavioredClassifier = require("./BehavioredClassifier.js");
const CallAction = require("./CallAction.js");
const CallBehaviorAction = require("./CallBehaviorAction.js");
const CallConcurrencyKind = require("./CallConcurrencyKind.js");
const CallOperationAction = require("./CallOperationAction.js");
const Class = require("./Class.js");
const Classifier = require("./Classifier.js");
const Clause = require("./Clause.js");
const ClearAssociationAction = require("./ClearAssociationAction.js");
const ClearStructuralFeatureAction = require("./ClearStructuralFeatureAction.js");
const Comment = require("./Comment.js");
const ConditionalNode = require("./ConditionalNode.js");
const ControlFlow = require("./ControlFlow.js");
const ControlNode = require("./ControlNode.js");
const CreateLinkAction = require("./CreateLinkAction.js");
const CreateObjectAction = require("./CreateObjectAction.js");
const DataType = require("./DataType.js");
const DecisionNode = require("./DecisionNode.js");
const DestroyLinkAction = require("./DestroyLinkAction.js");
const DestroyObjectAction = require("./DestroyObjectAction.js");
const Element = require("./Element.js");
const ElementImport = require("./ElementImport.js");
const Enumeration = require("./Enumeration.js");
const EnumerationLiteral = require("./EnumerationLiteral.js");
const Event = require("./Event.js");
const ExecutableNode = require("./ExecutableNode.js");
const ExpansionKind = require("./ExpansionKind.js");
const ExpansionNode = require("./ExpansionNode.js");
const ExpansionRegion = require("./ExpansionRegion.js");
const Feature = require("./Feature.js");
const FinalNode = require("./FinalNode.js");
const FlowFinalNode = require("./FlowFinalNode.js");
const ForkNode = require("./ForkNode.js");
const FunctionBehavior = require("./FunctionBehavior.js");
const Generalization = require("./Generalization.js");
const InitialNode = require("./InitialNode.js");
const InputPin = require("./InputPin.js");
const InstanceSpecification = require("./InstanceSpecification.js");
const InstanceValue = require("./InstanceValue.js");
const InvocationAction = require("./InvocationAction.js");
const JoinNode = require("./JoinNode.js");
const LinkAction = require("./LinkAction.js");
const LinkEndCreationData = require("./LinkEndCreationData.js");
const LinkEndData = require("./LinkEndData.js");
const LinkEndDestructionData = require("./LinkEndDestructionData.js");
const LiteralBoolean = require("./LiteralBoolean.js");
const LiteralInteger = require("./LiteralInteger.js");
const LiteralNull = require("./LiteralNull.js");
const LiteralReal = require("./LiteralReal.js");
const LiteralSpecification = require("./LiteralSpecification.js");
const LiteralString = require("./LiteralString.js");
const LiteralUnlimitedNatural = require("./LiteralUnlimitedNatural.js");
const LoopNode = require("./LoopNode.js");
const MergeNode = require("./MergeNode.js");
const MessageEvent = require("./MessageEvent.js");
const MultiplicityElement = require("./MultiplicityElement.js");
const NamedElement = require("./NamedElement.js");
const Namespace = require("./Namespace.js");
const ObjectFlow = require("./ObjectFlow.js");
const ObjectNode = require("./ObjectNode.js");
const OpaqueBehavior = require("./OpaqueBehavior.js");
const Operation = require("./Operation.js");
const OutputPin = require("./OutputPin.js");
const Package = require("./Package.js");
const PackageableElement = require("./PackageableElement.js");
const PackageImport = require("./PackageImport.js");
const Parameter = require("./Parameter.js");
const ParameterDirectionKind = require("./ParameterDirectionKind.js");
const Pin = require("./Pin.js");
const PrimitiveType = require("./PrimitiveType.js");
const Property = require("./Property.js");
const ReadExtentAction = require("./ReadExtentAction.js");
const ReadIsClassifiedObjectAction = require("./ReadIsClassifiedObjectAction.js");
const ReadLinkAction = require("./ReadLinkAction.js");
const ReadSelfAction = require("./ReadSelfAction.js");
const ReadStructuralFeatureAction = require("./ReadStructuralFeatureAction.js");
const Reception = require("./Reception.js");
const ReclassifyObjectAction = require("./ReclassifyObjectAction.js");
const RedefinableElement = require("./RedefinableElement.js");
const ReduceAction = require("./ReduceAction.js");
const RemoveStructuralFeatureValueAction = require("./RemoveStructuralFeatureValueAction.js");
const SendSignalAction = require("./SendSignalAction.js");
const Signal = require("./Signal.js");
const SignalEvent = require("./SignalEvent.js");
const Slot = require("./Slot.js");
const StartClassifierBehaviorAction = require("./StartClassifierBehaviorAction.js");
const StartObjectBehaviorAction = require("./StartObjectBehaviorAction.js");
const StructuralFeature = require("./StructuralFeature.js");
const StructuralFeatureAction = require("./StructuralFeatureAction.js");
const StructuredActivityNode = require("./StructuredActivityNode.js");
const TestIdentityAction = require("./TestIdentityAction.js");
const Trigger = require("./Trigger.js");
const Type = require("./Type.js");
const TypedElement = require("./TypedElement.js");
const ValueSpecification = require("./ValueSpecification.js");
const ValueSpecificationAction = require("./ValueSpecificationAction.js");
const VisibilityKind = require("./VisibilityKind.js");
const WriteLinkAction = require("./WriteLinkAction.js");
const WriteStructuralFeatureAction = require("./WriteStructuralFeatureAction.js");

module.exports = {
	AcceptEventAction: AcceptEventAction,
	Action: Action,
	Activity: Activity,
	ActivityEdge: ActivityEdge,
	ActivityFinalNode: ActivityFinalNode,
	ActivityNode: ActivityNode,
	ActivityParameterNode: ActivityParameterNode,
	AddStructuralFeatureValueAction: AddStructuralFeatureValueAction,
	AggregationKind: AggregationKind,
	Association: Association,
	Behavior: Behavior,
	BehavioralFeature: BehavioralFeature,
	BehavioredClassifier: BehavioredClassifier,
	CallAction: CallAction,
	CallBehaviorAction: CallBehaviorAction,
	CallConcurrencyKind: CallConcurrencyKind,
	CallOperationAction: CallOperationAction,
	Class: Class,
	Classifier: Classifier,
	Clause: Clause,
	ClearAssociationAction: ClearAssociationAction,
	ClearStructuralFeatureAction: ClearStructuralFeatureAction,
	Comment: Comment,
	ConditionalNode: ConditionalNode,
	ControlFlow: ControlFlow,
	ControlNode: ControlNode,
	CreateLinkAction: CreateLinkAction,
	CreateObjectAction: CreateObjectAction,
	DataType: DataType,
	DecisionNode: DecisionNode,
	DestroyLinkAction: DestroyLinkAction,
	DestroyObjectAction: DestroyObjectAction,
	Element: Element,
	ElementImport: ElementImport,
	Enumeration: Enumeration,
	EnumerationLiteral: EnumerationLiteral,
	Event: Event,
	ExecutableNode: ExecutableNode,
	ExpansionKind: ExpansionKind,
	ExpansionNode: ExpansionNode,
	ExpansionRegion: ExpansionRegion,
	Feature: Feature,
	FinalNode: FinalNode,
	FlowFinalNode: FlowFinalNode,
	ForkNode: ForkNode,
	FunctionBehavior: FunctionBehavior,
	Generalization: Generalization,
	InitialNode: InitialNode,
	InputPin: InputPin,
	InstanceSpecification: InstanceSpecification,
	InstanceValue: InstanceValue,
	InvocationAction: InvocationAction,
	JoinNode: JoinNode,
	LinkAction: LinkAction,
	LinkEndCreationData: LinkEndCreationData,
	LinkEndData: LinkEndData,
	LinkEndDestructionData: LinkEndDestructionData,
	LiteralBoolean: LiteralBoolean,
	LiteralInteger: LiteralInteger,
	LiteralNull: LiteralNull,
	LiteralReal: LiteralReal,
	LiteralSpecification: LiteralSpecification,
	LiteralString: LiteralString,
	LiteralUnlimitedNatural: LiteralUnlimitedNatural,
	LoopNode: LoopNode,
	MergeNode: MergeNode,
	MessageEvent: MessageEvent,
	MultiplicityElement: MultiplicityElement,
	NamedElement: NamedElement,
	Namespace: Namespace,
	ObjectFlow: ObjectFlow,
	ObjectNode: ObjectNode,
	OpaqueBehavior: OpaqueBehavior,
	Operation: Operation,
	OutputPin: OutputPin,
	Package: Package,
	PackageableElement: PackageableElement,
	PackageImport: PackageImport,
	Parameter: Parameter,
	ParameterDirectionKind: ParameterDirectionKind,
	Pin: Pin,
	PrimitiveType: PrimitiveType,
	Property: Property,
	ReadExtentAction: ReadExtentAction,
	ReadIsClassifiedObjectAction: ReadIsClassifiedObjectAction,
	ReadLinkAction: ReadLinkAction,
	ReadSelfAction: ReadSelfAction,
	ReadStructuralFeatureAction: ReadStructuralFeatureAction,
	Reception: Reception,
	ReclassifyObjectAction: ReclassifyObjectAction,
	RedefinableElement: RedefinableElement,
	ReduceAction: ReduceAction,
	RemoveStructuralFeatureValueAction: RemoveStructuralFeatureValueAction,
	SendSignalAction: SendSignalAction,
	Signal: Signal,
	SignalEvent: SignalEvent,
	Slot: Slot,
	StartClassifierBehaviorAction: StartClassifierBehaviorAction,
	StartObjectBehaviorAction: StartObjectBehaviorAction,
	StructuralFeature: StructuralFeature,
	StructuralFeatureAction: StructuralFeatureAction,
	StructuredActivityNode: StructuredActivityNode,
	TestIdentityAction: TestIdentityAction,
	Trigger: Trigger,
	Type: Type,
	TypedElement: TypedElement,
	ValueSpecification: ValueSpecification,
	ValueSpecificationAction: ValueSpecificationAction,
	VisibilityKind: VisibilityKind,
	WriteLinkAction: WriteLinkAction,
	WriteStructuralFeatureAction: WriteStructuralFeatureAction
}