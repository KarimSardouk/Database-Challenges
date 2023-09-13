const express = require('express');
const app = express();

// Set up a basic route
app.get('/api', (req, res) => {
  res.send('Welcome to the API!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
