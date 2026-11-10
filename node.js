const express = require("express");
const app = express();

app.use(express.json()); // to read JSON request bodies

// GET route
app.get("/", (req, res) => {
  res.send("Hello from GET!");
});

// POST route
app.post("/submit", (req, res) => {
  const data = req.body;
  res.json({
    message: "Data received",
    data
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});