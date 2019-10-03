const express = require('express');
const path = require('path'); // NEW
const db = require('/.')

const app = express();
const port = process.env.PORT || 3400;
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
  console.log("Hello!")
  res.sendFile(HTML_FILE); // EDIT
});

app.post('/payment', (req, res) => {
  console.log(req.body)

})

// app.post('/', (req, res) => {
//   res.sendFile(HTML_FILE); // EDIT
// });

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});