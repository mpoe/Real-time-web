const express = require('express');

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(9000, function listenHandler() {
  console.info('Running');
});