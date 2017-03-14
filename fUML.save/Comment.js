const mixin = require("mixin");
const codeGenMixin = require("../CodeGenMixins/Comment");



class Comment extends Object {

	constructor() {

		this.body = null;
		this.annotatedElement=null;	

	}

}//end Comment

 module.exports = Comment;
