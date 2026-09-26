import { useState } from "react";
import {uploadPDFs} from "../Services/api";

function UploadSection() {
  const [selectedFiles,setSelectedFiles]=useState([]);

  const [fileNames, setFileNames] = useState([]);
  const [uploadState, setUploadState] = useState(false);

  const [uploadMessage,setUploadMessage]=useState("");
  const [isUploading,setIsUploading]=useState(false);

  function listFileNames(e) {
    let filesArray = [];
    for (let i = 0; i < e.target.files.length; i++) {
      filesArray = [...filesArray, e.target.files[i].name];
    }
    setSelectedFiles(e.target.files);
    setFileNames(filesArray);
    setUploadState(true);
  }

   async function handleUpload(){
      if(selectedFiles.length===0){
        setUploadMessage("Please select PDf files");
        return;
      }

      try{
        setIsUploading(true);
        setUploadMessage("Uploading ...");

        const data=await uploadPDFs(selectedFiles);
        console.log(data);
        
        setUploadMessage("Uploaded Successfully");
      }catch(error){
        setUploadMessage("Upload Failed",error);
      }finally{
        setIsUploading(false);
      }
    }

  return (
    <div className="upload_section_container">
      <p className="upload_section_title">Upload PDF Documents</p>

      <input type="file" multiple accept=".pdf" onChange={listFileNames} />

      {fileNames.map((fileName, i) => {
        return <p key={i}>{fileName}</p>;
      })}

      {uploadState ? (
        <button
          className="upload_buttons"
          onClick={handleUpload}
          disabled={isUploading}
        >
          {isUploading ? "Uploading..." : "Upload"}
        </button>
        ) : (
           ""
      )}

      {uploadMessage && <p className="upload_message">{uploadMessage}</p>}
    </div>
  );
}
export default UploadSection;
