const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Comment");



class Comment extends codeGenMixin(Object) {

	constructor() {

		this.body = null;
		this.annotatedElement=null;	

	}

}//end Comment

 module.exports = Comment;
