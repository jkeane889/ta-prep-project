const express = require('express');
const path = require('path'); // NEW
const db = require('../db/index.js');

const app = express();
const port = process.env.PORT || 3030;
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW

app.use(express.static(DIST_DIR)); // NEW
app.use(express.json());

// Set up GET request for grocery List items from database

// POST new grocery item to database

// DELETE grocery item from database

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});