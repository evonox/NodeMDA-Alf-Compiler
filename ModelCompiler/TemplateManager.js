const fsx = require("fs-extra");
const path = require("path");
const configReader = require("./ConfigReader");
const fileScanner = require("./FileScanner");
const hb = require("handlebars");

let rootTemplateFolder = null;

// registers various helpers
// TODO - Code clean up
function registerHelpers() {
    hb.registerHelper("switch", function(value, options) {
        this._switch_value_ = value;
        var html = options.fn(this); // Process the body of the switch block
        delete this._switch_value_;
        return html;
    });

    hb.registerHelper("case", function(value, options) {
        if (value == this._switch_value_) {
            return options.fn(this);
        }
    });

    hb.registerHelper("x", function(expression, options) {
        var result;

        // you can change the context, or merge it with options.data, options.hash
        var context = this;

        // yup, i use 'with' here to expose the context's properties as block variables
        // you don't need to do {{x 'this.age + 2'}}
        // but you can also do {{x 'age + 2'}}
        // HOWEVER including an UNINITIALIZED var in a expression will return undefined as the result.
        with(context) {
            result = (function() {
            try {
                return eval(expression);
            } catch (e) {
                console.warn('•Expression: {{x \'' + expression + '\'}}\n•JS-Error: ', e, '\n•Context: ', context);
            }
            }).call(context); // to make eval's lexical this=context
        }
        return result;
    });

    hb.registerHelper("xif", function(expression, options) {
        return hb.helpers["x"].apply(this, [expression, options]) ? options.fn(this) : options.inverse(this);
    });
}




class TemplateFolder {
    constructor(name) {
        this.name = name;
        this.childFolders = new Array();
        this.templateFiles = new Array();
    }

    createTemplatePath(path) {
        if(! (path instanceof Array))
            throw new Error("Path parameter must be an array.");

        if(path.length === 0) return this;
        path = path.slice(0);
        let folderName = path.shift();

        let templateFolder = this.getChildFolderByName(folderName);
        if(templateFolder === null) {
            templateFolder = new TemplateFolder(folderName);
            this.childFolders.push(templateFolder);
        }

        return templateFolder.createTemplatePath(path);
    }

    getChildFolderByName(folderName) {
        let list =  this.childFolders.filter(childFolder => childFolder.name === folderName);
        return list.length === 0 ? null : list[0];
    }
}

class TemplateFile {
    constructor(name, content) {
        this.name = name;
        this.content = content;
    }
}

function scanCodeGenTemplates(rootFolder) {
    fileScanner.scan(configReader.getPlatformDir(), "hbs", function(filePath) {
        let relativePath = path.relative(configReader.getPlatformDir(), filePath);
        let directoryPath = path.dirname(relativePath).replace("\\", "/").split("/");
        let templateName = path.basename(relativePath, ".hbs");
        let templateContent = fsx.readFileSync(filePath).toString();

        let templateFolder = rootFolder.createTemplatePath(directoryPath);
        templateFolder.templateFiles.push(new TemplateFile(templateName, templateContent));
    });
}

module.exports = {
    scanTemplates: function() {
        registerHelpers();
        rootTemplateFolder = new TemplateFolder("");
        scanCodeGenTemplates(rootTemplateFolder);
    },

    getRootTemplateFolder: function() {
        return rootTemplateFolder;
    }
}