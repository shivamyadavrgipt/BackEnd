const { name } = require('ejs');
const express=require('express');
const bcrypt= require('bcrypt');//incryption and decryption
const jwt= require('jasonwebtoken');

app.get("/",function(req,res){
    let token=jwt.sign({email:"ashuyadav@gmail.com"},"secret");
    res.cookie("token",token);
    res.send("done");
})
app.listen(3000,()=>{
    console.log("Chal rha hai");
})
