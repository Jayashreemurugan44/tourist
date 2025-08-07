const express = require('express');
const path = require('path');

const app = express();
const port = 3333;

// Serve static files (your HTML, CSS, JS, etc.)
app.use(express.static(__dirname));

// Dummy route to confirm PR
app.get('/check', (req, res) => {
  res.send('✅ Pull Request working!');
});

// Start the server
app.listen(port, () => {
  console.log(`🌐 Server running at http://localhost:${port}`);
});

