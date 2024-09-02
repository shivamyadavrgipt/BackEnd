const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('ello World');
});
app.get('/Profile', function (req, res,next) {
    return next(new Error("Something weent wrong"))
  });

  //error Handling
  app.use((err,req, res,next) {
    console.error(err.stack)
    res.status(500).send('Somethinng went wrong')
  });

app.listen(3000);