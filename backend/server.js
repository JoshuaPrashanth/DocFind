const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
app.use(cors());

const upload = multer({
  dest: "./uploads",
});

let filenames = [];

app.post("/api/upload", upload.array("pdfFiles", 50), (req, res) => {
  for (let f of req.files) {
    filenames = [...filenames, f.originalname];
  }
  console.log("Files Saved in uploads folder!");
});

app.get("/api/upload", (req, res) => {
  res.json({
    success: true,
    files: filenames,
  });
});

app.listen(3000, () => {
  console.log("Backend is running on port: 3000");
});
