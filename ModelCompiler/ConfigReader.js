const fsx = require("fs-extra");
const path = require("path");
const winston = require("winston");

const CONFIG_FILE_NAME = "nodemda-executable.json";

const CLASS_TEMPLATE_FOLDER = "Classes";
const CLASS_LAYER_CONFIG_FILE_NAME = "class-layers.json";

let platformDirectory = null;

function getPlatformList(projectDir) {
    let configFile = path.join(projectDir, CONFIG_FILE_NAME);
    if(! fsx.existsSync(configFile)) {
        winston.error(`Cannot find configuration file for NodeMDA Executable plugin.`);
        process.exit(1);
    }

    let optionsContent = fsx.readFileSync(configFile);
    let options = JSON.parse(optionsContent);

    if(! (options.platforms instanceof Array)) {
        winston.error("The platform list in configuration file has wrong format.");
        process.exit(1);
    }

    return options.platforms;
}

function getClassLayerConfiguration() {
    if(platformDirectory === null) {
        winston.error("The platform directory has not been set.");
        process.exit(1);
    }
    let layerConfigFile = path.join(platformDirectory, CLASS_TEMPLATE_FOLDER, CLASS_LAYER_CONFIG_FILE_NAME);
    if(! fsx.existsSync(layerConfigFile)) {
        winston.error("Configuration file for class layers was not found.");
        process.exit(1);
    }
    let layerConfig = JSON.parse(fsx.readFileSync(layerConfigFile).toString());
    return layerConfig;
}

module.exports = {
    getPlatformList: getPlatformList,
    getClassLayerConfiguration,

    setPlatformDir: function(platformDir) {
        platformDirectory = platformDir;
    },
    getPlatformDir: function() {
        return platformDirectory;
    },
    getClassTemplateFolder: function() {
        return CLASS_TEMPLATE_FOLDER
    }
}