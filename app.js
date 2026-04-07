const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// ✅ THIS LINE FIXES YOUR ISSUE
app.use(express.static('public'));

// test route
app.get('/health', (req, res) => {
  res.json({ status: "OK" });
});

// calculator routes
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a - b });
});

app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a * b });
});

app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (b === 0) return res.json({ error: "Cannot divide by zero" });
  res.json({ result: a / b });
});

const server = app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = server;