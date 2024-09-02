const fs = require('fs');
fs.writeFile("hey.txt","Its good and i am enjoying",function(err){
    if(err)console.error(err);
    else console.log("Done1");
})
fs.appendFile("hey.txt"," things are going smooth",function(err){
    if(err)console.error(err);
    else console.log("Done2");
})
//rename file
fs.rename("hey.txt","Hello.txt",function(err){
    if(err)console.error(err);
    else console.log("Done3");
})

//copy file

fs.copyFile("hey.txt","Hello.txt",function(err){
    if(err)console.error(err);
    else console.log("Done3");
})

//unlink delete

//rimdir->removes folder