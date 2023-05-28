const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    Title : {
        type : String,
        required : true,
        unique : true
    },
    Desc : {
        type : String,
        required : true
    },
    Photo : {
        type : String,
        required : false
    },
    Username : {
        type : String,
        required : true
    },
    Categories : {
        type : Array,
        required : false
    }
    },
 {timestamps:true}
)

module.exports = mongoose.model("Post",PostSchema);