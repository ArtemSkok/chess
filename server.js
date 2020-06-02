const express = require('express');
const app = express();

app.use(express.static('./dist/chess'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/chess' });
});

app.listen(process.env.PORT || 8080);