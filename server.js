const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname + '')));
app.set('view engine', 'njk');
nunjucks.configure({
  autoescape: true,
  express: app
});


app.get('/', (request, response) => {
  response.render('layouts/mobile/HomePage/index.njk');
});

app.listen(port, function() {
  console.log ('we are on ' + port);
});
