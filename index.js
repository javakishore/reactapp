const express = require('express');
con
const app = express();

app.get('/', (req, res) => {
  res.send('How are you doing');
});

app.listen(8090, () => {
  console.log('Listening on port 8090');
});
