import { useState } from "react";

function UploadSection() {
  const [uploadState, setUploadState] = useState(false);
  const [files, setFiles] = useState([]);

  function listFileNames(e) {
    let filesArray = [];
    for (let f of e.target.files) {
      filesArray = [...filesArray, f];
    }
    setFiles(filesArray);
    setUploadState(true);
  }

  async function uploadFiles() {
    setUploadState(false);
    const formData = new FormData();
    for (let file of files) {
      formData.append("pdfFiles", file);
    }
    await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formData,
    });
    console.log("Files Uploaded!!");
  }

  return (
    <div className="upload_section_container">
      <p className="upload_section_title">Upload PDF Documents</p>
      <input
        type="file"
        multiple
        accept=".pdf"
        name="pdfFiles"
        onChange={listFileNames}
      />
      {files.map((file, i) => {
        return <p key={i}>{file.name}</p>;
      })}
      {uploadState ? (
        <button className="upload_buttons" onClick={uploadFiles}>
          Upload
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
export default UploadSection;
