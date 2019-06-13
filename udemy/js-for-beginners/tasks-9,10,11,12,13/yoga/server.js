var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/form', (req, res) => {
  setTimeout(() => res.sendStatus(200), 2000);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
