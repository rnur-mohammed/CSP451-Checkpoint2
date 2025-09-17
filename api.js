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
// Example GET endpoint
app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ]);
});

// Example POST endpoint
app.post('/users', (req, res) => {
  const { name } = req.body;
  res.json({ success: true, user: { id: 4, name: name } });
});

module.exports = app;
