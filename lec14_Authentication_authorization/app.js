const { name } = require('ejs');
const express=require('express');
const bcrypt= require('bcrypt');//incryption and decryption

app.use(cookieParser); //parses cookies attached to the client request object.
app.get("/",function(req,res){
    res.cookie(name,"Shivam");
    res.send("Done");
})
app.listen(3000,()=>{
    console.log("Chal rha hai");
})
