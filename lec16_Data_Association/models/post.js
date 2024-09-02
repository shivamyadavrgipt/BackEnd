const mongoose=require("mongoose");
const user = require("./user");
mongoose.connect("mongodb://127.0.0.1:27017/testing_the_database");

const postSchema=mongoose.Schema({
    postdata:String,
    user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'user'
    },
    date:{
        type:Date,
        default:Date.now
    },
    postdata:String
})

module.exports=mongoose.model('post', postSchema);