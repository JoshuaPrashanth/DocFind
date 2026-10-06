const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const { PDFParse } = require("pdf-parse");
const path = require("path");

app.use(cors());

const folderpath = path.join(__dirname, "uploads");

if (!fs.existsSync(folderpath)) {
  fs.mkdirSync(folderpath);
}

app.use("/pdfs", express.static(folderpath));

const storage = multer.diskStorage({
  destination: folderpath,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

async function readPdf(filePath) {
  const temp = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: temp });
  const data = await parser.getText();
  await parser.destroy();
  return data.pages;
}

async function searchKeyWord(keyword) {
  const files = fs.readdirSync(folderpath);
  const pdfs = files.filter((file) => file.toLowerCase().endsWith(".pdf"));
  const results = [];
  for (const pdf of pdfs) {
    const pdfPath = path.join(folderpath, pdf);
    const pages = await readPdf(pdfPath);
    pages.forEach((page) => {
      const text = page.text || "";
      if (text.toLowerCase().includes(keyword.toLowerCase())) {
        results.push({
          pdfName: pdf,
          pageNumber: page.num,
        });
      }
    });
  }
  return results;
}

function clearUploads(){
  const files=fs.readdirSync(folderpath);

  files.forEach((file)=>{
    const filepath=path.join(folderpath,file);

    if(fs.statSync(filepath).isFile()){
      fs.unlinkSync(filepath);
    }
  })

}

app.post("/api/upload", upload.array("pdfFiles", 50), (req, res) => {
  res.json({
    success: true,
    files: req.files.map((file) => file.originalname),
  });
});

app.get("/api/search", async (req, res) => {
  const keyword = req.query.keyword;
  const results = await searchKeyWord(keyword);
  res.json(results);
});

app.listen(3000, () => {
  console.log("Backend is running on port: 3000");
});

// http://localhost:3000/api/search?keyword=keyword
