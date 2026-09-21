const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/api/test", (req, res) => {
  res.json({
    Test_Status: true,
    PDF_Name: "Sample Test",
    Page_no: 32,
  });
});

app.listen(3000, () => {
  console.log("Backend is running on port: 3000");
});
