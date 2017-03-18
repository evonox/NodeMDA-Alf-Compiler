const fs = require("fs");
const path = require("path");
const winston = require("winston");
const configReader = require("./ConfigReader");
const templateManager = require("./TemplateManager");
const dirGenerator = require("./ProjectDirectoryGenerator");
const classCodeGenerator = require("./ClassCodeGenerator");
const beautifier = require("nodemda-code-beautifier");

const PLATFORM_PREFIX  = "nodemda-exec-";

function resolvePlatformDir(platformName) {
    platformName = PLATFORM_PREFIX + platformName;
    try {
        return path.dirname(require.resolve(platformName));
    }
    catch(e) {
        winston.error(`Platform compiler with name "${platformName}" not found.`);
    }
}

function getPlatformLanguage(platformDir) {
    let filePath = path.join(platformDir, "index.js");
    let options = require(filePath);
    console.dir(options);
    return options.language;
}

function runPlatform(platformName, appJson, options) {
    let platformDir = resolvePlatformDir(platformName);
    configReader.setPlatformDir(platformDir);

    winston.info(`Starting code-generation for platform "${platformName}"...`);
    templateManager.scanTemplates();
    dirGenerator.generate(options.output, appJson);
    classCodeGenerator.generate(options.output, appJson);
    winston.info(`Code-generation for platform "${platformName}" finished successfully.`);

    winston.info("Starting code beautification process...");
    beautifier.beautify(getPlatformLanguage(platformDir), options.output);
    winston.info("Code has been beautified.");
}

module.exports = {
    runPlatform: runPlatform
}