const winston = require("winston");
const hb = require("handlebars");
const configReader = require("./ConfigReader");
const templateManager = require("./TemplateManager");

var rootTemplate = null;

function registerFolderTemplates(templateFolder) {
    templateFolder.templateFiles.every((templateFile) => {
        hb.registerPartial(templateFile.name, templateFile.content);
        return true;
    });
}

function registerTemplates(templateFolder) {
    registerFolderTemplates(templateFolder);
    templateFolder.childFolders.every((folder) => {
        registerTemplates(folder);
        return true;
    });
}

module.exports = {
    existsLayerRootTemplate: function(layer) {
        let classTemplateFolder = templateManager.getRootTemplateFolder()
                                    .getChildFolderByName(configReader.getClassTemplateFolder());
        if(classTemplateFolder === null) {
            winston.error("Cannot find class template folder.");
            process.exit(1);
        }
        let layerTemplateFolder = classTemplateFolder.getChildFolderByName(layer.directory);
        if(layerTemplateFolder === null) {
            winston.error(`Cannot find layer template folder "${layer.directory}".`);
            process.exit(1);
        }
        if(layerTemplateFolder.templateFiles
            .filter(templateFile => templateFile.name === layer.rootTemplate).length === 0) {
                return false;
            }
        return true;
    },

    registerTemplatesForLayer: function(layerDirectory) {
        let classTemplateFolder = templateManager.getRootTemplateFolder()
                                    .getChildFolderByName(configReader.getClassTemplateFolder());
        if(classTemplateFolder === null) {
            winston.error("Cannot find class template folder.");
            process.exit(1);
        }
        let layerTemplateFolder = classTemplateFolder.getChildFolderByName(layerDirectory);
        if(layerTemplateFolder === null) {
            winston.error(`Cannot find layer template folder "${layerDirectory}".`);
            process.exit(1);
        }
        registerTemplates(layerTemplateFolder);
    },

    registerSupplementalTemplates: function() {
        templateManager.getRootTemplateFolder().childFolders
            .filter(folder => folder.name !== configReader.getClassTemplateFolder())
            .every((folder) => {
                registerTemplates(folder);
                return true;
            });
    },

    compileRootLayerTemplate: function(templateName) {
        rootTemplate = hb.compile(`\{\{> ${templateName} \}\}`);

    },

    generateCode: function(classJson) {
        let sourceCode = rootTemplate(classJson);
        return sourceCode;
    }
}