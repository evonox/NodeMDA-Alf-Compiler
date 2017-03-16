const path = require("path");
const winston = require("winston");
const dirGenerator = require("./ProjectDirectoryGenerator");

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

function runPlatform(platformName, appJson, options) {
    console.log(resolvePlatformDir(platformName));
    dirGenerator.generate(options.output, appJson);
}

module.exports = {
    runPlatform: runPlatform
}