// Import Express
const express = require('express');
const app = express();
const port = 5000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('<h1>Hello World from Node.js!</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});