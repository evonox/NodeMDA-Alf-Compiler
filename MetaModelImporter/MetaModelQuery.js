class UMLElement {
    constructor(metaElement) {
        this.metaElement = metaElement;
        this.childElements = new Array();
    }

    addChildElement(childElement) {
        if(this.getChildElementByName(childElement.name) !== null) return;
        this.childElements.push(childElement);
    }

    get name() {
        return this.metaElement === null ? "" : this.metaElement.name;
    }

    isPackage() { return false; }
    isClass() { return false; }
    isDataType() { return false; }
    isOperation() { return false; }
    isAttribute() { return false; }
    isAssociation() { return false; }
    isDependency() { return false; }
    isGeneralization() { return false; }

    getNamespace(namespace) {
        namespace = namespace.slice(0);
        if(namespace.length === 0) return this;
        let name = namespace.shift();
        let childElement = this.getChildElementByName(name);
        if(childElement === null) return null;
        else return childElement.getNamespace(namespace);
    }

    getChildElementByName(name) {
        let found = null;
        this.childElements.every((childElement) => {
            if(childElement.name === name)
                found = childElement;
            return true;
        });
        return found;
    }   
}

class Package extends UMLElement {
    constructor(name) {
        super(null);
        this._name = name;
    }

    isPackage() { return true; }

    get name() { return this._name; }

    getChildPackage(name) {
        let found = this.getChildElementByName(name);
        if(found === null) return null;
        return found.isPackage() ? found : null;
    }   
}

class Class extends UMLElement {
    constructor(metaElement) {
        super(metaElement);
    }

    isClass() { return true; }
}

class DataType extends UMLElement {
    constructor(metaElement) {
        super(metaElement);
    }

    isDataType() { return true; }
}

class Operation extends UMLElement {
    constructor(metaElement) {
        super(metaElement)
    }

    isOperation() { return true; }

    toJson() {
        return {
            name: this.name,
            isAbstract: false, // TODO: This info is missing in NodeMDA metamodel
            isStatic: this.metaElement._static,
            visibility: this.metaElement._visibility
        }
    }
}

class Attribute extends UMLElement {
    constructor(metaElement) {
        super(metaElement)
    }

    isAttribute() { return true; }

    toJson() {
        return {
            name: this.name,
            multiplicity: this.metaElement._multiplicity,
            readOnly: this.metaElement._readOnly,
            visibility: this.metaElement._visibility
        };
    }
}

class Association extends UMLElement {
    constructor(metaElement) {
        super(metaElement)
    }

    isAssociation() { return true; }

    get name() {
        return this.metaElement.myEnd.name;
    }

    toJson() {
        return {
            name: this.name,
            visibility: this.metaElement.myEnd._visibility,
            multiplicity: this.metaElement.myEnd._multiplicity,
            isNavigable: this.metaElement.myEnd._navigable,
            isAggregation: this.metaElement.myEnd._aggregation,
            isComposition: this.metaElement.myEnd._composition
        };
    }
}

class Dependency extends UMLElement {
    constructor(metaElement) {
        super(metaElement)
    }

    get name() { return ""; }

    isDependency() { return true; }

    toJson() {
        return {};
    }
}

class Generalization extends UMLElement {
    constructor(metaElement) {
        super(metaElement)
    }

    get name() { return ""; }

    isGeneralization() { return true; }

    toJson() {
        return {};
    }
}


// The job of this class is to provide interface for querying meta-model of NodeMDA
class MetaModelQueryFacade {

    constructor(metaModel, options) {
        this.metaModel = metaModel;
        this.options = options;
        this.parseMetaModel();
    }

    /*
        Query methods
    */
    getRootPackage() { return this.rootPackage; }
    queryTopPackages() {
        return this.rootPackage.childElements.filter((element) => {
            return element.isPackage();
        });
    }
    queryChildPackages(packageHandle) {
        return packageHandle.childElements.filter((element) => {
            return element.isPackage();
        });
    }
    queryClasses(packageHandle) {
        return packageHandle.childElements.filter((element) => {
            return element.isClass();
        });
    }
    queryDataTypes(packageHandle) {
        return packageHandle.childElements.filter((element) => {
            return element.isDataType();
        });
    }

    getElementComment(elementHandle) {
        let comment = elementHandle.metaElement.comment
        return comment === undefined ? [] : [comment];
    }
    getElementName(elementHandle) {
        return elementHandle.name;
    }
    getElementStereotypes(elementHandle) {
        if(elementHandle.metaElement.stereotypes === undefined) return [];
        return elementHandle.metaElement.stereotypes.map((s) => s.name);
    }
    getElementTagValues(elementHandle) {
        if(elementHandle.metaElement.tags === undefined) return [];
        else return elementHandle.metaElement.tags.map((tag) => {
            return {
                name: tag._name,
                value: tag._value
            }
        });
    }  

    getClassAssociations(classHandle) {
        return classHandle.childElements.filter((element) => {
            return element.isAssociation();
        })
        .map((element) => element.toJson());
    }
    getClassAttributes(classHandle) {
        return classHandle.childElements.filter((element) => {
            return element.isAttribute();
        });
    }

    getAttributeInfo(attributeHandle) {
        return attributeHandle.toJson();
    }

    getClassDependencies(classHandle) {
        return classHandle.childElements.filter((element) => {
            return element.isDependency();
        })
        .map((element) => element.toJson());
    }
    getClassGeneralizations(classHandle) {
        return classHandle.childElements.filter((element) => {
            return element.isGeneralization();
        })
        .map((element) => element.toJson());
    }
    getClassOperations(classHandle) {
        return classHandle.childElements.filter((element) => {
            return element.isOperation();
        });
    }

    getOperationInfo(operationHandle) {
        return operationHandle.toJson();
    }

    getOperationParameters(operationHandle) {
        return operationHandle.metaElement.parameters.map((parameter) => {
            return {
                name: parameter._name,
                type: parameter._type, // TODO needs to be resolved
                readOnly: parameter._readOnly,
                multiplicity: parameter._multiplicity,
                visibility: parameter._visibility
            };
        });
    }
    /*
        NodeMDA Meta-model parsing methods
    */

    parseMetaModel() {
        this.rootPackage = new Package("");
        this.parseClasses();
        this.parseDataTypes();
    }

    parseClasses() {
        this.metaModel.classes.every((classElement) => {
            let packagePath = classElement._package === null ? [] : classElement._package.nameAsArray;
            this.addPackagePath(packagePath);
            let packageElement = this.rootPackage.getNamespace(packagePath);
            if(packageElement === null)
                throw new Error("Cannot add class to a package. Package not found.");
            let umlClass = new Class(classElement)
            packageElement.addChildElement(umlClass);
            this.parseOperations(classElement, umlClass);
            this.parseAttributes(classElement, umlClass);
            this.parseAssociations(classElement, umlClass);
            this.parseDependencies(classElement, umlClass);
            this.parseGeneralizations(classElement, umlClass);
            return true;
        });
    }

    parseOperations(metaClass, umlClass) {
        metaClass.operations.every((operation) => {
            umlClass.addChildElement(new Operation(operation));
            return true;
        });
    }

    parseAttributes(metaClass, umlClass) {
        metaClass.attributes.every((attribute) => {
            umlClass.addChildElement(new Attribute(attribute));
            return true;
        });
    }

    parseAssociations(metaClass, umlClass) {
        metaClass.associations.every((assoc) => {
            umlClass.addChildElement(new Association(assoc));
            return true;
        });
    }

    parseDependencies(metaClass, umlClass) {
        metaClass.dependencies.every((dependency) => {
            umlClass.addChildElement(new Dependency(dependency));
            return true;
        });
    }

    parseGeneralizations(metaClass, umlClass) {
        metaClass.generalizations.every((generalization) => {
            umlClass.addChildElement(new Generalization(generalization));
            return true;
        });
    }

    parseDataTypes() {
        this.metaModel.datatypes.every ((datatype) => {
            if(! datatype.isObject) return true;
            let packagePath = datatype.packageName.split(this.options.packageDelimeter);
            this.addPackagePath(packagePath);
            let packageElement = this.rootPackage.getNamespace(packagePath);
            if(packageElement === null)
                throw new Error("Cannot add datatype to a packageElement. Package not found.");
            packageElement.addChildElement(new DataType(datatype));
            return true;
        });
    }

    addPackagePath(packagePath) {
        packagePath = packagePath.slice(0);
        this.addPackage(this.rootPackage, packagePath);
    }

    addPackage(parentPackage, pathToAdd) {
        if(pathToAdd.length === 0) return;
        let packageName = pathToAdd.shift();
        let packageElement =  parentPackage.getChildPackage(packageName);
        if(packageElement === null) {
            packageElement = new Package(packageName);
            parentPackage.addChildElement(packageElement);
        }
        this.addPackage(packageElement, pathToAdd);
    }
}

module.exports = {
    parse(metaModel, options) {
        return new MetaModelQueryFacade(metaModel, options);
    }
}