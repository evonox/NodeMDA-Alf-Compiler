const fs = require("fs");
const path = require("path");
const winston = require("winston");

CONFIG_FILE_NAME = "nodemda-executable.json";

function getPlatformList(projectDir) {
    let configFile = path.join(projectDir, CONFIG_FILE_NAME);
    if(! fs.existsSync(configFile)) {
        winston.error(`Cannot find configuration file for NodeMDA Executable plugin.`);
        process.exit(1);
    }

    let optionsContent = fs.readFileSync(configFile);
    let options = JSON.parse(optionsContent);

    if(! options.platforms instanceof Array) {
        winston.error("The platform list in configuration file has wrong format.");
        process.exit(1);
    }

    return options.platforms;
}

module.exports = {
    getPlatformList: getPlatformList
}