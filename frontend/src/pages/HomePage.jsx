import {useState,useEffect} from "react";
import UploadSection from "../components/UploadSection.jsx";
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx";
import PdfViewer from "../components/PdfViewer.jsx";

import {startNewSession} from "../Services/api.jsx";



function HomePage() {
  const [matchedPdfs,setMatchedPdfs]=useState([]);
  const [selectedPdfs,setSelectedPdfs]=useState(null);

 
  useEffect(()=>{

    async function newSession(){
      try{
        const data=await startNewSession();
        console.log(data);
      }
      catch(error){
        console.error("file deletion is failed",error);
      }
    }
    newSession();

  },[])



  return (
    <div className="container">

      <h1>DocFind</h1>
      <p>PDF Document Search</p>

      <UploadSection />

      <SearchBar 
        setMatchedPdfs={setMatchedPdfs}
      />
      <SearchResults 
        matchedPdfs={matchedPdfs}
        setSelectedPdfs={setSelectedPdfs}
      />

      {selectedPdfs && (
        <PdfViewer selectedPdfs={selectedPdfs}/>
      )}

    </div>
  );

}


export default HomePage;
