const mysql_pkg = require("mysql");
var properties = {
  host: "34.126.172.116",
  user: "root",
  password: "fintechsglab",
  database: "market",
};

var connection = mysql_pkg.createConnection(properties);

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connect to MySQL success");
  }
});
module.exports = { connection };