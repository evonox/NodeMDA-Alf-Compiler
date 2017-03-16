const configReader = require("./ConfigReader");
const platformRunner = require("./PlatformRunner");

module.exports = {

    compile: function(appJson, options) {
        let platforms = configReader.getPlatformList("./");

        // run all platform compilers 
        platforms.every((platformName) => {
            platformRunner.runPlatform(platformName, appJson, options);
            return true;
        });
    }
}