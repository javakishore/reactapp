const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi, there! how are you, I am fine');
});

app.listen(8090, () => {
  console.log('Listening on port 8090');
});
