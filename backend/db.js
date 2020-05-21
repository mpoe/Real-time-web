var mysql = require('mysql');
const dbcon = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: ""
});

dbcon.test = () => {
  console.log('test');
}


module.exports = dbcon;