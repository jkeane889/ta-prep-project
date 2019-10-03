const mysql = require('mysql');

const connection = mysql.createConnection({
  database : 'customers',
  user     : 'student', // change
  password : 'student1', // change
  host     : 'localhost'
});

connection.connect((err) => {
  if (err) { throw err };
  console.log('database connected!');
});

connection.query('INSERT INTO customer_data (name, email, password, address, phone, creditcard, expcredit, cvv, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', (err, results, fields) => {
  if (error) throw error;
  


})

// Run this to check that you are connected to the database
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports = connection;