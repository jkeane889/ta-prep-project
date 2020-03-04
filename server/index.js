const express = require('express');
const path = require('path'); // NEW
// const db = require('../db/index.js');

const app = express();
const port = process.env.PORT || 3030;
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW

app.use(express.static(DIST_DIR)); // NEW
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});

// Serve up static files

// Set up GET request for grocery List items from database

// POST new grocery item to database

// DELETE grocery item from database

app.post('/payment', (req, res) => {

  let insertion = `INSERT INTO users (name, email, password, address, phonenumber, creditcardnumber, expirationdate, cvv, billingcode) VALUES ('${name}', '${email}', '${password}', '${address}', '${phonenumber}', '${creditcard}', '${expiration}', '${cvv}', '${billingzip}');`
  db.query(insertion, (err, result) => {
    if (err) {
      console.log(err)
      return res.send(err);
    }
    res.redirect('/');
  })
})

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});