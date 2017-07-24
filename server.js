// apparently no database? unless you need to upload to the database to use multer

// init project
var express = require('express');
var multer = require('multer');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
// var uploadService = multer({ dest: "uploads/" });
var uploadService = multer({});


app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/upload", uploadService.single('fileUpload'), function(req, res){
  var fileSize = req.file.size;
  var fileName = req.file.originalname;
  var returnObj = {fileName: fileName, fileSize: fileSize}
  res.send(returnObj);
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
