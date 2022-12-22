import mysql from 'mysql';

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "market"
  })
  
  connection.connect((err) => {
    if (err) throw err;
  });

 export default connection;