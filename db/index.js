const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost', 
  database : 'customers', // change
  user     : 'student', // change
  password : 'student', // change
});

connection.connect((err) => {
  if (err) { throw err };
  console.log('database connected!');
});

// Run this to check that you are connected to the database
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports = connection;