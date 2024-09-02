const express=require('express');
const app=express();
const userModel= require("./usermodel");
    
app.get('/',(req,res)=> {
    res.send('hey');
})
app.get('/create',async(req,res)=> {
    let createduser=await userModel.create({
        name:"Shivam",
        email:"23cs2040@rgipt.ac.in",
        username:"shivamrgipt",
    })
    res.send(createduser);
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });