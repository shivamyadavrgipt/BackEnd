


//Code start from here

const express = require('express');
const path=require('path');
const app = express();

app.use(express.json());  //4,5 line:-reason to handle data at backend 
app.use(express.urlencoded({extended:true}));//Public ,images ,ststic files handle kar paenge
app.use(express.static(path.join(__dirname,'public'))); //it brings the path of public folder
app.set('view engine','ejs'); //render pages at ejs
// app.get('/', function (req, res) {
//   res.send('Hey Boss')
// });
app.get('/', function (req, res) { //=>basic route we rendered index file
  res.render('index')
});

app.get('/profile/:ashu', function (req, res) { //=>'/public/:ashu:45'-> yah ashu dynamic hai : lagane ke bad 
  req.params.ashu
  res.send('chall rha hai guru, ${req.params.ashu}');
});

app.listen(3000,function(){
  console.log("Its running");
});
//Till here setting up parsers for form