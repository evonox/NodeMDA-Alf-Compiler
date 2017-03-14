const NodeMDA = require('nodemda');
const fs = require("fs");
const mmImporter = require("./MetaModelImporter/MetaModelImporter");

function loadUmlModel() {
    return NodeMDA.Meta.Reader.getMeta(NodeMDA.Options.modelFileName);
}

module.exports = {
    compile() {
        let metaModel = loadUmlModel();
        console.log("MetaModel loaded...");
        let fUmlModel = mmImporter.import(metaModel);
        let json = fUmlModel.genJson();
        json = JSON.stringify(json, null, 4);
        fs.writeFileSync("fUML_JSON.txt", json);
    }
}
