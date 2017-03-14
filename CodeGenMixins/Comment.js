
var CommentCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Comment";
    }

    genJson() {
        let json = Object.assign(super.genJson());
        json.type = "";

        

        return json;
    }
}

module.exports = CommentCodeGenMixin;
