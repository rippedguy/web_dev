//Coments Schema

let mongoose = require("mongoose");


let commentSchema = mongoose.Schema({
    title:String,
    author:String
});

module.exports = mongoose.model("Comments",commentSchema);