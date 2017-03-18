const fsx = require("fs-extra");
const path = require("path");
const winston = require("winston");
const configReader = require("./ConfigReader");
const codeGenManager = require("./CodeGenerationManager");

function generateClassFiles(outputDir, packagePath, packageJson, layer) {
    packageJson.classes.every((classJson) => {
        let className = classJson.name;
        classJson.name = layer.className.replace("{0}", className);
        let sourceCode = codeGenManager.generateCode(classJson);
        classJson.name = className;
        let filename = layer.outputFileName.replace("{0}", classJson.name);
        let filePath = path.join(outputDir, ...packagePath, filename);
        fsx.writeFileSync(filePath, sourceCode);
        return true;
    });
}

function traversePackages(outputDir, packagePath, layer, packageJson) {
    generateClassFiles(outputDir, packagePath, packageJson, layer);
    packageJson.childPackages.every((childPackageJson) => {
        packagePath.push(childPackageJson.name);
        traversePackages(outputDir, packagePath, layer, childPackageJson);
        packagePath.pop();
        return true;
    });
}

function generateClassLayer(outputDir, layer, appJson) {
    if(! codeGenManager.existsLayerRootTemplate(layer)) {
        winston.warn("Missing the root template for this layer. Skipping its code-generation.");
        return;
    }
    codeGenManager.registerTemplatesForLayer(layer.directory);
    codeGenManager.compileRootLayerTemplate(layer.rootTemplate);
    traversePackages(outputDir, [], layer, appJson);
}

module.exports = {
    generate(outputDir, appJson) {
        let classLayerConfig = configReader.getClassLayerConfiguration();
        codeGenManager.registerSupplementalTemplates();

        classLayerConfig.layers.every((layer) => {
            winston.info(`Generating class model for layer "${layer.name}"...`);
            generateClassLayer(outputDir, layer, appJson);
            return true;
        });
    }
}