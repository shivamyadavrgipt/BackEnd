
//Code start from here

const express = require('express');
const path=require('path');
const app = express();
const fs=require('fs');
// const { log } = require('console');

app.set('view engine','ejs'); 
app.use(express.json());  //4,5 line:-reason to handle data at backend 
app.use(express.urlencoded({extended:true}));//Public ,images ,ststic files handle kar paenge
app.use(express.static(path.join(__dirname,"public"))); //it brings the path of public folder
//render pages at ejs

app.get('/', function (req, res) {
    fs.readdir('./files',function(err,files){
      res.render("index",{files:files});
    });
});
app.get('/files/:filename', function (req, res) {
  fs.readFile('./Files/${req.params.filename}',"utf-8",function(err,filedata){
    res.render("show",{filename:req.params.filename,filedata:filedata})
  });
});
app.get('/edit/:filename', function (req, res) {
  res.render('edit',{ filename: req.params.filename });
  });

  app.post('/edit', function (req, res) {
    fs.rename('./files/${req.body.previous} ','./files/${req.body.name}',function(err){
      res.redirect("/");
    })
    });
app.post('/create', function (req, res) {
  const sanitizedTitle = req.body.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const filePath = `./files/${sanitizedTitle}.txt`;
  fs.writeFile(`./files/${req.body.title.split(' ').join('')}`, req.body.details, function(err) {
    res.redirect("/") 
});
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
