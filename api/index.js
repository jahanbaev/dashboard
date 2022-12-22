/* eslint-disable no-unused-vars */
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import formidable from 'formidable';
import express from  'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import connection from './services/connection/database.js';
import tokenCreator from './services/tokenCreator.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
.use('*', cors())
.use(cookieParser())
.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cors({
  credentials: true,
  origin: "http://localhost:8081"
}));


app.post('/fileupload', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.file.filepath;
      let randId = tokenCreator(32);
      var newpath = __dirname + '/images/'+ randId + files.file.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        var sql = `INSERT INTO product_image (product_id, path) VALUES ('', '${randId + files.file.originalFilename}');`;
        connection.query(sql, function (err, result, fields) {
          if (err){
            res.send('{status: "error"}');
            throw err;
          }
          res.send('{"status": "success", "id": "'+result.insertId+'"}')
          res.end();
      });
      });
    });
})

app.post('/login', (req, res) => {
  let token;
  var sql = `SELECT * FROM seller WHERE userName = '${req.body.userName}' and  password = '${req.body.password}';`;
  connection.query(sql, function (err, result) {
    if (err){
      res.send('{status: "error"}');
      throw err;
    }
    if(result.length > 0){
      token = tokenCreator(32);
      var sql = `INSERT INTO sessions (userId, token, date) VALUES (${result[0].id},'${token}',now());`;
        connection.query(sql, function (err, result, fields) {
          if (err){
            res.send('{status: "error"}');
            throw err;
          }
          res.send('{"status": "success", "token": "'+token+'"}')
          res.end();
      });
    }else{
      res.send('{status: "error"}');
    }
  })
  
});


app.post('/register', (req, res) => {
  let token;
  var sql = `INSERT INTO seller (userName, userLastName, companyName, phone, password) VALUES ('${req.body.userName}', '${req.body.userLastName}', '${req.body.companyName}', '${req.body.phone}', '${req.body.password}')`;
  connection.query(sql, function (err, result) {
    if (err){
      res.send('{status: "error"}');
      throw err;
    }
    token = tokenCreator(32);
    res.send('{"status": "success", "token": "'+token+'"}')
  })
});




app.get('/test', (req, res) =>{
  res.send(req.cookies)
})

app.listen(9090, () =>{})