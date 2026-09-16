const express = require("express");

const app = express();
const PORT = 5000;

// Test API
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "DocFind backend is working!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});