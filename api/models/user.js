const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Username : {
        type : String,
        required : true,
        unique : true
    },
    Email : {
        type : String,
        required : true,
        unique : false
    },
    Password : {
        type : String,
        required : true,
    },
    ProfilePic : {
        type : String,
        default : ''
    },
}, {timestamps:true}
)

module.exports = mongoose.model("User",UserSchema);