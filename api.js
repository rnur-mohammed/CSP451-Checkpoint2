// API Endpoints Module
// This simulates a basic REST API structure

const express = require('express');
const app = express();
app.use(express.json());

// Server setup
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
