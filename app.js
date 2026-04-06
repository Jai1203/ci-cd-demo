const express = require("express");
const app = express();

app.use(express.json());

// Add
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

// Subtract
app.post("/subtract", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a - b });
});

// Multiply
app.post("/multiply", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a * b });
});

// Divide
app.post("/divide", (req, res) => {
  const { a, b } = req.body;

  if (b === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }

  res.json({ result: a / b });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app;