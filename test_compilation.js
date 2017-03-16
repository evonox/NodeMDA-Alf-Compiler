const NodeMDA = require('nodemda');
const fs = require("fs");
const mmImporter = require("./MetaModelImporter/MetaModelImporter");
const modelCompiler = require("./ModelCompiler/ModelCompiler");

module.exports = {
    compile(context) {
        // TODO: Find out why this method is invoked twice, the sedond time without context
        if(context === undefined) return;

        let fUmlModel = mmImporter.import(context.model, context.options);
        let json = fUmlModel.genJson();
        let appJson = json;
        json = JSON.stringify(json, null, 4);
        fs.writeFileSync("fUML_JSON.txt", json);
        modelCompiler.compile(appJson, context.options);
    }
}
