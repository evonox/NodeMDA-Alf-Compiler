
var ElementCodeGenMixin = (Base) => class extends Base {

    getType() {
        return "Element";
    }

    genJson() {
        let json = {};
        json.type = "";

        json = {
            comments: this.ownedComment === null ? [] 
                : this.ownedComment.filter((comment) => comment !== undefined && comment !== null),
            stereotypes: this.stereotypes,
            tagValues: this.tagValues
        };      

        return json;
    }
}

module.exports = ElementCodeGenMixin;
