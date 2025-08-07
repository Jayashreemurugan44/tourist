const express = require('express');
const path = require('path');

const app = express();
const port = 3333;

// Serve static files (your HTML, CSS, JS, etc.)
app.use(express.static(__dirname));

// Start the server
app.listen(port, () => {
  console.log(`🌐 Server running at http://localhost:${port}`);
});
