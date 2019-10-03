const express = require('express');
const path = require('path'); // NEW
const db = require('../db/index.js');

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW

const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

app.use(express.static(DIST_DIR)); // NEW
app.use(express.json());

app.get('/api', (req, res) => {
  res.send(mockResponse);
});

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});

app.post('/payment', (req, res) => {

  let name = req.body.user.firstname + req.body.user.lastname;
  let email = req.body.user.email;
  let password = req.body.user.password;
  let address = req.body.user.address;
  let phonenumber = req.body.user.phonenumber;
  let creditcard = req.body.user.creditcard;
  let expiration = req.body.user.expiration;
  let cvv = req.body.user.cvv;
  let billingzip = req.body.user.billingzip;

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