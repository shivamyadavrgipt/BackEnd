const express=require("express");
const app=express();
const userModel=require("./models/user");
const postModel=require("./models/post");
const user = require("./models/user");
const post = require("./models/post");

app.get("/",function(req,res){
    res.send("Move forward")
})
app.get("/create",async function(req,res){
    let user=await userModel.create({
        username:"ashu",
        age:25,
        email:"23cs2040@rgipt.ac.in",
    })
    res.send(user);
});
app.get("/post/create",async function(req,res){
    let post=await postModel.create({
        user:"66cb7b23caef02c1fa865ee3",
        postdata:"afjfwfw"
    })
    let user=await userModel.findOne({_id:"66cb7b23caef02c1fa865ee3"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
})

app.listen(3000,()=>{
    console.log("Chal rha");
})