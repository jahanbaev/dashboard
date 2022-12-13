/* eslint-disable no-unused-vars */
const formidable = require('formidable');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const mysql = require('mysql');

const app = express()
.use('*', cors())
.use(bodyParser.urlencoded({
    extended: true
}))
.use(bodyParser.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
})

app.post('/fileupload', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.file.filepath;
      var newpath = __dirname + '/images/' + files.file.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
})

app.post('/register', (req, res) => {
  console.log(req.body)
  console.log(Date)
  res.send('ok')
})

app.listen(9090, () =>{})