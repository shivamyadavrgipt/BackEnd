const express=require('express');
const app=express();
const userModel= require("./usermodel");
const { name } = require('ejs');
    
app.get('/',(req,res)=> {
    res.send('hey');
})
app.get('/create',async(req,res)=> {
    let createduser=await userModel.create({
        name:"User",
        email:"23cs2020@rgipt.ac.in",
        username:"useramrgipt",
    })
    res.send(createduser);
})
app.get('/update',async (req,res)=> {
    let updateuser=await userModel.findOneAndUpdate({name:"Ashu Yadav"},{new:true})
    res.send(updateuser);
})
app.get('/read',async (req,res)=>{
    let users=await userModel.findOne({username:"useramrgipt"});
    res.send(users);
})
app.get('/delete',async (req,res)=>{
    let user=await userModel.findOneAndDelete({username:"shivamrgipt"})
    res.send(user);
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });