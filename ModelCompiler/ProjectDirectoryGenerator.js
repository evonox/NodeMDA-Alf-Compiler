const fsx = require("fs-extra");
const winston = require("winston");

function generateDirectories(packagePath, package) {
    if(packagePath === "") {
        winston.warn("Package with missing name was found. Skipping creating its directory.");
        return;
    }

    if(! fsx.existsSync(packagePath)) {
        fsx.mkdirSync(packagePath);
    }

    process.chdir(packagePath);
    package.childPackages.every((childPackage) => {
        generateDirectories(childPackage.name, childPackage);
        return true;
    });
    process.chdir("..");
}

module.exports = {
    generate: function(projectDirectory, appJson) {
        let currentDir = process.cwd();
        generateDirectories(projectDirectory, appJson);
        process.chdir(currentDir);
    }
}