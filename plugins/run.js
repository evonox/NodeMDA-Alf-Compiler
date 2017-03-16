const runAPI = require("../test_compilation");

module.exports = {
    initPlatform: function(context) {
        runAPI.compile(context);
    }
}
