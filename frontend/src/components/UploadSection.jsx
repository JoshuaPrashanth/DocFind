import { useState } from "react";

function UploadSection() {
  const [fileNames, setFileNames] = useState([]);
  const [uploadState, setUploadState] = useState(false);

  function listFileNames(e) {
    let filesArray = [];
    for (let i = 0; i < e.target.files.length; i++) {
      filesArray = [...filesArray, e.target.files[i].name];
    }
    setFileNames(filesArray);
    setUploadState(true);
  }
  return (
    <div className="upload_section_container">
      <p className="upload_section_title">Upload PDF Documents</p>
      <input type="file" multiple accept=".pdf" onChange={listFileNames} />
      {fileNames.map((fileName, i) => {
        return <p key={i}>{fileName}</p>;
      })}
      {uploadState ? <button className="upload_buttons">Upload</button> : ""}
    </div>
  );
}
export default UploadSection;
