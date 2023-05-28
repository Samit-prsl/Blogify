const mongoose = require('mongoose')

const CategoriesSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    }
    },
 {timestamps:true}
)

module.exports = mongoose.model("Categories",CategoriesSchema);